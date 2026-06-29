/**
 * convert-exercises.mjs
 * Converts raw exercise text from B2 and C1C2 sources into structured JSON
 * for the ExerciseBlock component.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/convert-exercises.mjs [b2|c1c2|both] [--start=N] [--end=N]
 *
 * Output:
 *   public/b2-exercises-structured.json
 *   public/c1c2-exercises-structured.json
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// ─── Load raw data ────────────────────────────────────────────────────────────

// B2 data (b1-exercises.js exports EXERCISES_B1 – despite the name this is B2 content)
const b2Raw = (await import('../src/data/destination/b1-exercises.js')).EXERCISES_B1

// C1C2 data
const c1c2Raw = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/destination/c1c2-exercises.json'), 'utf8'))

// ─── Claude client ────────────────────────────────────────────────────────────

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ─── Prompt ───────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an expert at converting raw English language exercise text (scanned/OCR'd from grammar books) into clean structured JSON.

Output ONLY valid JSON — no markdown fences, no comments, no extra text.

Each exercise page produces ONE JSON object with this structure:
{
  "page": <number>,
  "section": "<string like 'Unit 1 Grammar' or 'Unit 2'>",
  "exercises": [
    {
      "exercise": "<letter or number label, e.g. 'A', 'B', '1', '2'>",
      "title": "<full instruction text for this exercise>",
      "type": "<see types below>",
      "word_bank": ["word1", "word2"],   // only if there is a word/phrase box
      "passage": "<optional: full passage text for gap_fill or circle_correct exercises>",
      "questions": [
        {
          "id": <number>,
          "sentence": "<sentence with ____ for blank, or full sentence for rewrite/sentence_writing>",
          "prompt": "<optional: prompt hint for sentence_writing>",
          "options": ["A text", "B text", "C text", "D text"],  // for multiple_choice
          "answer": "<correct answer string>"
        }
      ]
    }
  ]
}

Exercise types to use:
- fill_in_blank: complete gaps with correct verb form, one word, etc. Sentence has ____ for blank.
- word_bank: fill gaps using words from a provided box. Include word_bank array.
- circle_correct: choose correct word/phrase from two options shown as "opt1 / opt2" in sentence. For passage-style exercises, put full passage in "passage" field with "(N) option1 / option2" patterns preserved.
- multiple_choice: A/B/C/D options. Put options array on question.
- rewrite: rewrite a sentence correctly. Sentence field has the original (with bold/underline indicated). Answer is the corrected version.
- sentence_writing: write a sentence from a prompt. Prompt field has the cue, answer has full sentence.
- matching: match items from two columns. Use sentence for left column, answer for right.
- word_formation: change word form. Sentence has blank with original word in brackets.
- key_word_transformation: transform sentence using a key word. sentence = original, prompt = key word, answer = transformed.
- error_correction: find and fix the error. sentence = original, answer = corrected word/phrase.
- gap_fill: fill gaps in a longer passage. Put full passage in "passage" field with "(N) ______" patterns, questions have id + answer only.

Rules:
1. Preserve exercise letter labels exactly (A, B, C, D, E, F, G, H, I, J, etc.)
2. For fill_in_blank: replace "......" or "…" or "(verb)" gaps with "____". If original shows "(I / ever / eat)" keep it as part of sentence then use ____ for the gap position.
3. For circle_correct with a passage: put the whole passage in "passage" field. Keep "(N) word1 / word2" patterns intact for rendering.
4. For gap_fill passage: put passage in "passage" field with "(N) ______" replacing each gap.
5. Clean up OCR artifacts: fix obvious typos, remove noise characters, normalize spacing.
6. Number questions starting from 1.
7. If an exercise is a matching task with columns, use sentence = left item, answer = matched right item.
8. Always include "answer" – if you cannot determine it from context, use "".
9. Skip exercises that are pictures-only or cannot be converted (e.g., crossword grids). For these set type to "crossword" and questions to [].
10. The "title" should be the complete instruction sentence(s) for that exercise block.`

const USER_TEMPLATE = (pageData) => `Convert this exercise page to structured JSON.

PAGE ${pageData.page} — ${pageData.section}

RAW TEXT:
${pageData.text}`

// ─── Convert one page ─────────────────────────────────────────────────────────

async function convertPage(pageData, attempt = 1) {
  try {
    const response = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: USER_TEMPLATE(pageData) }],
    })

    const text = response.content.find(b => b.type === 'text')?.text?.trim() ?? ''

    // Strip markdown fences if present
    const jsonText = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim()

    return JSON.parse(jsonText)
  } catch (err) {
    if (attempt < 3) {
      console.warn(`  ⚠ Retry ${attempt + 1} for page ${pageData.page}...`)
      await new Promise(r => setTimeout(r, 2000 * attempt))
      return convertPage(pageData, attempt + 1)
    }
    console.error(`  ✗ Failed page ${pageData.page}: ${err.message}`)
    return {
      page: pageData.page,
      section: pageData.section,
      exercises: [],
      _error: err.message,
    }
  }
}

// ─── Process dataset ──────────────────────────────────────────────────────────

async function processDataset(rawPages, label, outputFile, startIdx = 0, endIdx = Infinity) {
  const pages = rawPages.slice(startIdx, endIdx === Infinity ? undefined : endIdx)
  console.log(`\n🔄 Converting ${label}: ${pages.length} pages (indices ${startIdx}–${Math.min(endIdx, rawPages.length) - 1})`)

  // Load existing output to support incremental runs
  let results = []
  if (fs.existsSync(outputFile)) {
    results = JSON.parse(fs.readFileSync(outputFile, 'utf8'))
    console.log(`  📂 Resuming: ${results.length} pages already converted`)
  }

  const existingPages = new Set(results.map(r => r.page))

  for (let i = 0; i < pages.length; i++) {
    const pageData = pages[i]
    const pageNum = pageData.page

    if (existingPages.has(pageNum)) {
      console.log(`  ⏭  Page ${pageNum} already done, skipping`)
      continue
    }

    process.stdout.write(`  [${i + 1}/${pages.length}] Page ${pageNum} (${pageData.section})... `)
    const result = await convertPage(pageData)
    results.push(result)
    existingPages.add(pageNum)

    // Sort by page number and save after each conversion
    results.sort((a, b) => a.page - b.page)
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf8')
    console.log(`✓ (${result.exercises?.length ?? 0} exercises)`)

    // Rate limit: small delay between requests
    if (i < pages.length - 1) await new Promise(r => setTimeout(r, 500))
  }

  console.log(`✅ ${label} done → ${outputFile}`)
  return results
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const mode = args.find(a => !a.startsWith('--')) ?? 'both'
const startArg = args.find(a => a.startsWith('--start='))
const endArg = args.find(a => a.startsWith('--end='))
const startIdx = startArg ? parseInt(startArg.split('=')[1]) : 0
const endIdx = endArg ? parseInt(endArg.split('=')[1]) : Infinity

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY environment variable not set')
  process.exit(1)
}

const publicDir = path.join(ROOT, 'public')
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })

if (mode === 'b2' || mode === 'both') {
  await processDataset(
    b2Raw,
    'B2 Exercises',
    path.join(publicDir, 'b2-exercises-structured.json'),
    startIdx,
    endIdx,
  )
}

if (mode === 'c1c2' || mode === 'both') {
  await processDataset(
    c1c2Raw,
    'C1C2 Exercises',
    path.join(publicDir, 'c1c2-exercises-structured.json'),
    startIdx,
    endIdx,
  )
}

console.log('\n🎉 All done!')
