// Uses gpt-5.4-mini to align OCR'd exercise pages + answer key into structured JSON.
const fs = require('fs')
const SP = __dirname
const KEYFILE = 'E:/androidStudioProject/webApp/public/b1-units/openai api/.evn'
const KEY = (fs.readFileSync(KEYFILE, 'utf8').match(/OPENAI_API_KEY\s*=\s*(\S+)/) || [])[1]
if (!KEY) { console.error('no key'); process.exit(1) }
const MODEL = 'gpt-5.4-mini'

const UNITS = {
  6: { need: ['F', 'G', 'H'] },
  7: { need: ['A', 'B', 'C', 'D', 'E', 'F'] },
  8: { need: ['A', 'B', 'C', 'D', 'E', 'F'] },
  9: { need: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] },
}

const SYS = `You are a meticulous data-entry assistant. You are given OCR text (with errors) from the
photocopiable workbook "Destination B1 (Grammar & Vocabulary)" by Malcolm Mann & Steve Taylore-Knowles:
(1) the EXERCISE PAGES for one unit, and (2) the matching ANSWER KEY text for that unit.
Your job: reconstruct the requested exercises as clean structured JSON, fixing OCR errors using context
and standard English. Do NOT invent exercises or questions that are not in the source. Do NOT paraphrase
question wording - copy it verbatim, only repairing obvious OCR damage (e.g. "w i l l" -> "will",
"leavin_g" -> "leaving", "abouVof" -> "about/of", "1 0" -> "10", "ls/going" -> "is / going").

Output a single JSON object: { "exercises": [ { ... }, ... ] }.
Each exercise object:
  "exercise": "F"                     (the letter)
  "type": "<given type>"
  "title": "<instruction line, verbatim, OCR-fixed>"
  "word_bank": ["...", ...]           (ONLY if the exercise shows a box of words; else omit)
  "questions": [ ... ]
CRITICAL: every gap_fill/fill_in_blank question MUST have the COMPLETE original sentence in "sentence",
copied word-for-word from the exercise page, with exactly six underscores "______" where each blank is.
Never output a stub like "______ visit" - find the real sentence on the exercise page. If a question is
part of a numbered passage, still give each item its own full sentence (you may keep the "(1)" marker).

Question shapes by type:
  gap_fill / fill_in_blank / word_formation / rewrite / error_correction:
     { "id": 1, "sentence": "full sentence with ______ for each gap", "answer": "answer from key" }
     - word_formation: also add "capital_word": "FLY" if the book prints a CAPITAL prompt word.
     - error_correction: "sentence" = the wrong sentence; "answer" = the correction from the key.
  sentence_writing:
     { "id": 1, "prompt": "the prompt/diary cue, verbatim (e.g. 'On Monday: meet Alison - Friends Cafe')", "sentence": "", "answer": "model answer from key" }
     - ALWAYS fill "prompt" from the exercise page (diary entries, cue words, "On Monday, she ...").
  multiple_choice:
     { "id": 1, "sentence": "stem with ______ if there is a gap", "options": {"A":"...","B":"...","C":"..."}, "answer": "A" }
     - if the book's MC is really "circle X / Y" inside the sentence, keep type multiple_choice,
       put the whole sentence in "sentence" with " / " between the two choices, options omitted, answer = the correct phrase.
  anagram:
     { "id": 1, "letters": "EGULGAG", "sentence": "sentence with ______", "answer": "luggage" }
  matching:
     { "id": 1, "left": "As the plane took", "right": "off, I held my mum's hand tightly.", "answer": "C" }
     (answer = the letter matched in the key)
For a gap that needs two words, write the answer as "word1 / word2" (spaces around slash).
Use the answer key's exact spelling/casing. If a specific answer truly cannot be recovered, use "".
Return ONLY the JSON object.`

async function callModel(unit, layText, akText, needList, jsonState) {
  const user = `UNIT ${unit}. Reconstruct ONLY these exercises: ${needList.join(', ')}.

Current app data for this unit (types, counts, and any existing question text - trust the letter/type/count,
reuse existing "sentence"/"options"/"letters" where present, ADD the "answer" from the key):
${jsonState}

===== EXERCISE PAGES (OCR, layout mode) =====
${layText}

===== ANSWER KEY (OCR, reading order) =====
${akText}
`
  const body = {
    model: MODEL,
    messages: [{ role: 'system', content: SYS }, { role: 'user', content: user }],
    response_format: { type: 'json_object' },
    max_completion_tokens: 16000,
  }
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY },
    body: JSON.stringify(body),
  })
  const j = await r.json()
  if (j.error) throw new Error(j.error.message)
  const usage = j.usage
  console.error(`  unit ${unit}: tokens in=${usage.prompt_tokens} out=${usage.completion_tokens}`)
  return j.choices[0].message.content
}

;(async () => {
  const results = {}
  for (const [unit, cfg] of Object.entries(UNITS)) {
    const lay = fs.readFileSync(`${SP}/lay-u${unit}.txt`, 'utf8')
    const ak = fs.readFileSync(`${SP}/ak-u${unit}.txt`, 'utf8')
    const state = fs.readFileSync(`${SP}/json-Unit${unit}.json`, 'utf8')
    console.error(`calling model for Unit ${unit}...`)
    let out
    try {
      out = await callModel(unit, lay, ak, cfg.need, state)
      const parsed = JSON.parse(out)
      results[unit] = parsed
      fs.writeFileSync(`${SP}/ai-u${unit}.json`, JSON.stringify(parsed, null, 2))
      console.error(`  ok: ${parsed.exercises?.length} exercises`)
    } catch (e) {
      console.error(`  FAIL unit ${unit}: ${e.message}`)
      fs.writeFileSync(`${SP}/ai-u${unit}.raw.txt`, out || String(e))
    }
  }
  fs.writeFileSync(`${SP}/ai-all.json`, JSON.stringify(results, null, 2))
  console.error('done -> ai-all.json')
})()
