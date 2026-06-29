/**
 * parse-exercises.mjs
 * Converts raw exercise text to structured JSON using pattern matching.
 * No API key needed.
 *
 * Usage: node scripts/parse-exercises.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// ─── Helpers ──────────────────────────────────────────────────────────────────

function clean(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/ {2,}/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .trim()
}

// Detect exercise type from instruction title
function detectType(title) {
  const t = title.toLowerCase()
  if (/circle the correct|circle the word|circle \w+ (correct|option)|circle (both|both if)/.test(t)) return 'circle_correct'
  if (/word(s)? (in|from) the box|box below|words? from the list|using the words?/.test(t) && /gap|blank|complete/.test(t)) return 'word_bank'
  if (/complete|fill in|write (the|a|one) (verb|word|correct|missing)|put.{0,30}correct form|write .{0,20}form of/.test(t)) return 'fill_in_blank'
  if (/choose the correct (answer|word|option)|choose (a|the) correct|multiple choice/.test(t) || /answer [A-D],/.test(t)) return 'multiple_choice'
  if (/rewrite|rewrite correctly|write .{0,20}correct|words? in bold/.test(t)) return 'rewrite'
  if (/write .{0,30}sentence|make sentence|write sentence/.test(t)) return 'sentence_writing'
  if (/match|matching/.test(t)) return 'matching'
  if (/word form|form of the word|correct form of|correct word form|formation/.test(t)) return 'word_formation'
  if (/key word|keyword|key-word/.test(t)) return 'key_word_transformation'
  if (/error|mistake|incorrect|correct the/.test(t)) return 'error_correction'
  if (/crossword/.test(t)) return 'crossword'
  if (/passage|text|read the/.test(t)) return 'gap_fill'
  // default
  if (/complete/.test(t)) return 'fill_in_blank'
  return 'fill_in_blank'
}

// Extract word bank from text like "word1 • word2 • word3" or "word1 / word2"
function extractWordBank(text) {
  // Look for lines with bullet separators or multiple words in a box pattern
  const bulletMatch = text.match(/([a-zA-Z\s]+(?:\s*[•·,]\s*[a-zA-Z\s]+){2,})/m)
  if (bulletMatch) {
    const words = bulletMatch[1].split(/\s*[•·,]\s*/).map(w => w.trim()).filter(w => w && w.length > 0 && w.length < 30)
    if (words.length >= 3) return words
  }
  return []
}

// Normalize gap markers to ____
function normalizeGaps(text) {
  return text
    .replace(/\.{4,}/g, '____')
    .replace(/_{4,}/g, '____')
    .replace(/…{1,}/g, '____')
    .replace(/\u2026/g, '____')
}

// Parse numbered questions for fill_in_blank / rewrite / circle_correct etc.
function parseNumberedQuestions(text, type) {
  const questions = []
  const normalized = normalizeGaps(text)

  // Split by question numbers: "1 ", "2 ", etc at start of line
  const lines = normalized.split('\n')
  let currentNum = null
  let currentLines = []

  const flushCurrent = () => {
    if (currentNum === null) return
    const sentence = currentLines.join(' ').trim().replace(/\s+/g, ' ')
    if (sentence.length > 2) {
      questions.push({ num: currentNum, sentence })
    }
    currentLines = []
  }

  for (const line of lines) {
    const stripped = line.trim()
    if (!stripped) continue

    // Match "1 text" or "1. text" or "1) text" at start
    const numMatch = stripped.match(/^(\d{1,2})\s*[.):]?\s+(.+)/)
    if (numMatch) {
      const num = parseInt(numMatch[1])
      if (num > 0 && num <= 50) {
        flushCurrent()
        currentNum = num
        currentLines = [numMatch[2]]
        continue
      }
    }

    if (currentNum !== null) {
      currentLines.push(stripped)
    }
  }
  flushCurrent()

  return questions.map(q => {
    const id = q.num
    let sentence = q.sentence

    // For circle_correct: detect "word1 / word2" pattern
    if (type === 'circle_correct') {
      // Keep as-is, passage renderer handles it
      return { id, sentence, answer: '' }
    }

    // For rewrite: bold words or phrase in bold
    if (type === 'rewrite') {
      const boldMatch = sentence.match(/\*\*(.+?)\*\*/) || sentence.match(/__(.+?)__/)
      return { id, sentence, answer: boldMatch ? boldMatch[1] : '' }
    }

    // For multiple_choice: detect A/B/C/D options
    if (type === 'multiple_choice') {
      const opts = []
      const optMatch = sentence.match(/\b([ABCD])\s+([^\n]+)/g)
      return { id, sentence, options: opts, answer: '' }
    }

    // For fill_in_blank: ensure ____ is present
    if (type === 'fill_in_blank' || type === 'word_bank' || type === 'gap_fill' || type === 'word_formation') {
      if (!sentence.includes('____')) {
        // Try to find bracket verb hints like "(verb)" and convert
        sentence = sentence.replace(/\(([^)]+)\)/g, (m, inner) => {
          if (/^[a-z]/.test(inner) && inner.length < 30) return `____ (${inner})`
          return m
        })
      }
    }

    return { id, sentence, answer: '' }
  })
}

// Parse matching exercises (two columns)
function parseMatching(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  const questions = []
  const leftItems = []
  const rightItems = []

  for (const line of lines) {
    // Left column: "1 text" or "1. text"
    const leftMatch = line.match(/^(\d+)\s*[.):]?\s+(.+)/)
    if (leftMatch) {
      leftItems.push({ num: parseInt(leftMatch[1]), text: leftMatch[2].trim() })
      continue
    }
    // Right column: "A text" or "A. text"
    const rightMatch = line.match(/^([A-J])\s*[.):]?\s+(.+)/)
    if (rightMatch) {
      rightItems.push({ letter: rightMatch[1], text: rightMatch[2].trim() })
    }
  }

  for (const left of leftItems) {
    questions.push({ id: left.num, sentence: left.text, answer: '' })
  }
  return questions
}

// Parse multiple choice (detect A/B/C/D blocks)
function parseMultipleChoice(text) {
  const questions = []
  const normalized = normalizeGaps(text)

  // Split by question number
  const qRegex = /(\d+)\s+([^ABCD\n][^\n]*(?:\n(?!\d+\s|[ABCD]\s)[^\n]*)*)/g
  let match

  // Simpler: split lines
  const lines = normalized.split('\n').map(l => l.trim()).filter(Boolean)
  let currentQ = null
  let currentOptions = []

  const flush = () => {
    if (!currentQ) return
    questions.push({
      id: currentQ.num,
      sentence: currentQ.text,
      options: currentOptions.slice(),
      answer: ''
    })
    currentOptions = []
    currentQ = null
  }

  for (const line of lines) {
    const numMatch = line.match(/^(\d{1,2})\s+(.+)/)
    const optMatch = line.match(/^([ABCD])\s+(.+)/)

    if (numMatch && parseInt(numMatch[1]) <= 50) {
      flush()
      currentQ = { num: parseInt(numMatch[1]), text: numMatch[2] }
    } else if (optMatch && currentQ) {
      currentOptions.push(`${optMatch[1]} ${optMatch[2]}`)
    } else if (currentQ && !optMatch) {
      // continuation of question text
      currentQ.text += ' ' + line
    }
  }
  flush()

  return questions
}

// ─── Exercise block parser ────────────────────────────────────────────────────

// Detect exercise label pattern: standalone "A", "B", etc. or "Exercise A"
const EXERCISE_LABEL_RE = /^([A-J])\s*$/
const EXERCISE_LABEL_INLINE_RE = /^([A-J])\s+\n?([A-Z].{5,})/  // "A\nInstruction text"

function splitIntoExercises(text) {
  const lines = text.split('\n')
  const blocks = []
  let currentLabel = null
  let currentLines = []

  const flush = () => {
    if (currentLines.length > 0) {
      blocks.push({ label: currentLabel, lines: currentLines.slice() })
    }
    currentLines = []
  }

  for (let i = 0; i < lines.length; i++) {
    const stripped = lines[i].trim()

    // Standalone letter on its own line (A, B, C ... J)
    if (EXERCISE_LABEL_RE.test(stripped)) {
      flush()
      currentLabel = stripped
      continue
    }

    // "A Circle the correct..." — letter + instruction on same line
    const inlineMatch = stripped.match(/^([A-J])\s+([A-Z].{5,})/)
    if (inlineMatch) {
      flush()
      currentLabel = inlineMatch[1]
      currentLines.push(inlineMatch[2])
      continue
    }

    // Roman numerals used as section markers (I, II, etc.) — ignore as labels
    if (/^(I{1,3}|IV|V|VI|VII|VIII|IX|X)\s*$/.test(stripped)) {
      currentLines.push(stripped)
      continue
    }

    if (stripped) currentLines.push(stripped)
  }
  flush()

  return blocks
}

// Parse one exercise block into structured form
function parseExercise(label, lines) {
  const fullText = lines.join('\n')

  // First non-empty line is the title/instruction
  const titleLine = lines.find(l => l.trim().length > 5) || ''
  let title = titleLine.trim()

  // Try to find a word bank
  const wordBank = extractWordBank(fullText)
  const hasWordBank = wordBank.length >= 3

  // Determine type
  let type = detectType(title)
  if (hasWordBank && type === 'fill_in_blank') type = 'word_bank'

  // For passages (gap_fill / circle_correct): detect if there's a passage structure
  const isPassage = /\(1\)/.test(fullText) && fullText.length > 200

  let questions = []
  let passage = ''

  if (type === 'matching') {
    questions = parseMatching(fullText)
  } else if (type === 'multiple_choice') {
    questions = parseMultipleChoice(fullText)
    if (questions.length === 0) {
      questions = parseNumberedQuestions(fullText, type)
    }
  } else if (isPassage && (type === 'gap_fill' || type === 'fill_in_blank' || type === 'word_bank')) {
    // Extract passage text (after title)
    const afterTitle = lines.slice(1).join('\n')
    passage = normalizeGaps(afterTitle)
    // Extract numbered items from passage
    const gapNums = [...passage.matchAll(/\((\d+)\)/g)].map(m => parseInt(m[1]))
    questions = [...new Set(gapNums)].sort((a, b) => a - b).map(id => ({ id, sentence: '', answer: '' }))
    type = 'gap_fill'
  } else if (isPassage && type === 'circle_correct') {
    const afterTitle = lines.slice(1).join('\n')
    passage = afterTitle
    const nums = [...passage.matchAll(/\((\d+)\)/g)].map(m => parseInt(m[1]))
    questions = [...new Set(nums)].sort((a, b) => a - b).map(id => ({ id, sentence: '', answer: '' }))
  } else {
    questions = parseNumberedQuestions(fullText, type)
  }

  const result = {
    exercise: label || 'A',
    title,
    type,
    questions,
  }

  if (hasWordBank && (type === 'word_bank' || type === 'fill_in_blank')) {
    result.word_bank = wordBank
  }

  if (passage) {
    result.passage = passage
  }

  return result
}

// ─── Process one raw page ─────────────────────────────────────────────────────

function processPage(rawPage) {
  const text = clean(rawPage.text || '')
  const page = rawPage.page
  const section = rawPage.section || ''

  const exerciseBlocks = splitIntoExercises(text)

  const exercises = exerciseBlocks
    .filter(b => b.lines.length > 0)
    .map(b => parseExercise(b.label, b.lines))
    .filter(e => e.questions.length > 0 || e.type === 'crossword')

  // If no exercises detected, create a fallback fill_in_blank from the whole page
  if (exercises.length === 0 && text.length > 50) {
    const questions = parseNumberedQuestions(text, 'fill_in_blank')
    if (questions.length > 0) {
      exercises.push({
        exercise: 'A',
        title: text.split('\n').find(l => l.trim().length > 10) || section,
        type: 'fill_in_blank',
        questions,
      })
    }
  }

  return { page, section, exercises }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // B2
  console.log('📖 Processing B2 exercises...')
  const b2Raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'b2-raw.json'), 'utf8'))
  const b2Result = b2Raw.map((page, i) => {
    process.stdout.write(`\r  B2 [${i + 1}/${b2Raw.length}] page ${page.page}...`)
    return processPage(page)
  })
  console.log(`\n  ✓ ${b2Result.length} pages`)
  fs.writeFileSync(
    path.join(ROOT, 'public', 'b2-exercises-structured.json'),
    JSON.stringify(b2Result, null, 2),
    'utf8'
  )
  console.log('  → public/b2-exercises-structured.json')

  // C1C2
  console.log('📖 Processing C1C2 exercises...')
  const c1c2Raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'c1c2-raw.json'), 'utf8'))
  const c1c2Result = c1c2Raw.map((page, i) => {
    process.stdout.write(`\r  C1C2 [${i + 1}/${c1c2Raw.length}] page ${page.page}...`)
    return processPage(page)
  })
  console.log(`\n  ✓ ${c1c2Result.length} pages`)
  fs.writeFileSync(
    path.join(ROOT, 'public', 'c1c2-exercises-structured.json'),
    JSON.stringify(c1c2Result, null, 2),
    'utf8'
  )
  console.log('  → public/c1c2-exercises-structured.json')

  console.log('\n🎉 Done!')
}

main().catch(console.error)
