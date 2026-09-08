import { useState } from 'react'
import { InlineInput, InlineChoiceButtons, parseCircleOptions } from './SentenceRenderer'

/**
 * Normalise a multiple_choice `options` value into an ordered { key: label } object.
 * Handles the three shapes seen in the data:
 *   - object:  { A: "went", B: "go" }                     -> unchanged
 *   - array:   ["A We'll go", "B We're going", "C We go"]  -> { A: "We'll go", ... }
 *   - string:  "ferry/traffic"                            -> { A: "ferry", B: "traffic" }
 */
export function normalizeOptions(raw) {
  if (!raw) return null
  if (Array.isArray(raw)) {
    const out = {}
    raw.forEach((item, i) => {
      const s = String(item).trim()
      const m = s.match(/^([A-Za-z])[.)]?\s+(.*)$/)
      if (m) out[m[1].toUpperCase()] = m[2].trim()
      else out[String.fromCharCode(65 + i)] = s
    })
    return out
  }
  if (typeof raw === 'string') {
    const out = {}
    raw.split('/').map(s => s.trim()).filter(Boolean).forEach((o, i) => {
      out[String.fromCharCode(65 + i)] = o
    })
    return Object.keys(out).length ? out : null
  }
  if (typeof raw === 'object') return raw
  return null
}

// Strip a trailing parenthetical note, e.g. "had (extra word)" -> "had".
const stripNote = s => (s || '').replace(/\s*\([^)]*\)\s*/g, ' ').trim()

/**
 * FillSentence — renders a sentence with one or more ______ blanks.
 *
 * Props:
 *   sentence       – string with ______ placeholders
 *   answers        – object { 0: '...', 1: '...' } keyed by blank index
 *   correctAnswers – array of correct strings per blank index
 *   onChange(i, v) – called with blank index + new value
 *   checked        – bool
 */
function FillSentence({ sentence, answers, correctAnswers, onChange, checked }) {
  const parts = (sentence || '').split('______')

  // Single blank — no split needed, use index 0
  if (parts.length <= 2) {
    const val = answers[0] || ''
    const isCorrect = checked && val.trim().toLowerCase() === (correctAnswers[0] || '').toLowerCase()
    if (parts.length === 1) {
      // No blank found — just render text + 1 input appended
      return (
        <span className="leading-relaxed">
          {sentence}
          <InlineInput value={val} onChange={v => onChange(0, v)} checked={checked} isCorrect={isCorrect} />
        </span>
      )
    }
    return (
      <span className="leading-relaxed">
        {parts[0]}
        <InlineInput
          value={val}
          onChange={v => onChange(0, v)}
          checked={checked}
          isCorrect={isCorrect}
          size={val.length > 15 ? 'xl' : 'md'}
        />
        {parts[1]}
      </span>
    )
  }

  // Multiple blanks
  return (
    <span className="leading-relaxed">
      {parts.map((part, i) => {
        const val = answers[i] || ''
        const isCorrect = checked && val.trim().toLowerCase() === (correctAnswers[i] || '').toLowerCase()
        return (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <InlineInput
                value={val}
                onChange={v => onChange(i, v)}
                checked={checked}
                isCorrect={isCorrect}
                size={val.length > 15 ? 'xl' : 'md'}
              />
            )}
          </span>
        )
      })}
    </span>
  )
}

export default function QuestionItem({ question, exerciseType, checked, answer, onAnswerChange, showAnswer, explanation }) {
  const num = question.id ?? question.num ?? '?'
  const correctAnswer = question.answer ?? ''
  const [showExpl, setShowExpl] = useState(false)

  // For multi-blank questions, answer is an object { 0: '...', 1: '...' }
  // For single-answer questions, answer is a string — normalise to object
  const blankCount = (question.sentence ?? '').split('______').length - 1
  const isMultiBlank = blankCount > 1

  // correctAnswers: split on "/" (with or without surrounding spaces) for multi-blank,
  // else this is a 1-element array.
  const correctAnswers = correctAnswer
    .split(/\s*\/\s*/)
    .map(s => s.trim())

  // answers object: { 0: string, 1: string, ... }
  const answersObj = isMultiBlank
    ? (typeof answer === 'object' && answer !== null ? answer : {})
    : { 0: typeof answer === 'string' ? answer : '' }

  // isCorrect for the whole question (used for border colour)
  const isCorrect = (() => {
    if (!correctAnswer.trim()) return false
    if (isMultiBlank) {
      return correctAnswers.every((ans, i) =>
        (answersObj[i] || '').trim().toLowerCase() === ans.toLowerCase()
      )
    }
    const given = stripNote((answersObj[0] || '').trim().toLowerCase())
    // Accept slash-separated alternatives for single-blank; ignore "(extra word)" notes
    const accepted = correctAnswer.toLowerCase().split('/').map(s => stripNote(s.trim()))
    return accepted.includes(given)
  })()

  // onChange handler — wraps index-based changes
  const handleChange = (blankIdx, val) => {
    if (isMultiBlank) {
      onAnswerChange({ ...answersObj, [blankIdx]: val })
    } else {
      onAnswerChange(val)
    }
  }

  const baseClass = 'rounded-xl px-4 py-3 mb-1.5 text-sm leading-loose transition-all'
  const stateClass = checked
    ? isCorrect
      ? 'border-l-4 border-green-400 bg-green-50'
      : correctAnswer
        ? 'border-l-4 border-red-400 bg-red-50'
        : 'border-l-4 border-gray-200 bg-gray-50'
    : 'border-l-4 border-transparent bg-gray-50 hover:bg-blue-50/50'

  const qItemClass = `${baseClass} ${stateClass}`
  const numSpan = <span className="font-bold text-blue-600 mr-1.5 select-none">{num}.</span>

  const answerReveal = showAnswer && correctAnswer && (
    <div className="mt-1 inline-flex items-center gap-1 text-xs text-green-700 font-semibold">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      {correctAnswer}
    </div>
  )

  const explBlock = explanation ? (
    <div className="mt-1.5">
      <button
        type="button"
        onClick={() => setShowExpl(v => !v)}
        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {showExpl ? 'Ẩn giải thích' : 'Vì sao?'}
      </button>
      {showExpl && (
        <div className="mt-1 text-xs leading-relaxed text-gray-700 rounded-lg px-3 py-2" style={{ background: '#eef2ff', border: '1px solid #e0e7ff' }}>
          {explanation}
        </div>
      )}
    </div>
  ) : null

  // ── multiple_choice ──
  const mcOptions = exerciseType === 'multiple_choice' ? normalizeOptions(question.options) : null
  if (exerciseType === 'multiple_choice' && mcOptions) {
    const normCorrect = (correctAnswer || '').trim().toLowerCase()
    return (
      <li className={qItemClass}>
        {question.sentence && <div>{numSpan}<span>{question.sentence}</span></div>}
        {!question.sentence && <div>{numSpan}</div>}
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.entries(mcOptions).map(([key, val]) => {
            const isOpt = answer === key
            // Correct answer may be stored as the key ("A") or the label ("went").
            const isCorrectOpt = !!normCorrect && (
              key.toLowerCase() === normCorrect ||
              String(val).trim().toLowerCase() === normCorrect
            )
            let cls = 'border-2 rounded-lg px-3 py-1.5 text-sm cursor-pointer transition-all font-medium '
            if (checked) {
              if (isCorrectOpt) cls += 'bg-green-500 border-green-500 text-white shadow-sm'
              else if (isOpt)   cls += 'bg-red-500 border-red-500 text-white'
              else              cls += 'border-gray-200 text-gray-400 bg-white opacity-60'
            } else {
              cls += isOpt
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'border-blue-200 bg-white text-blue-800 hover:border-blue-400 hover:bg-blue-50'
            }
            return (
              <button key={key} onClick={() => !checked && onAnswerChange(key)} className={cls}>
                {key}. {val}
              </button>
            )
          })}
        </div>
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── multiple_choice with no options object but "x / y" inside the sentence ──
  if (exerciseType === 'multiple_choice' && !mcOptions && (question.sentence || '').includes(' / ')) {
    const parsed = parseCircleOptions(question.sentence, correctAnswer)
    if (parsed) {
      return (
        <li className={qItemClass}>
          {numSpan}
          <span>{parsed.before}</span>
          <InlineChoiceButtons options={[parsed.option1, parsed.option2]} selected={answer} onSelect={onAnswerChange} checked={checked} correctAnswer={correctAnswer} />
          <span>{parsed.after}</span>
          {answerReveal}
          {explBlock}
        </li>
      )
    }
  }

  // ── circle_correct (compound: "out / up") ──
  if (exerciseType === 'circle_correct' && correctAnswer.includes(' / ')) {
    const answerParts = correctAnswer.split(' / ').map(s => s.trim())
    const slashRegex = / \/ /g
    const pairs = []
    let m
    while ((m = slashRegex.exec(question.sentence)) !== null) {
      const before = question.sentence.slice(0, m.index)
      const after  = question.sentence.slice(m.index + 3)
      const left   = before.trim().split(/\s+/).slice(-1)[0].replace(/[.,!?;:]*$/, '')
      const right  = after.trim().split(/\s+/)[0].replace(/[.,!?;:]*$/, '')
      pairs.push({ left, right, pos: m.index })
    }
    if (pairs.length === answerParts.length) {
      const optionA = correctAnswer
      const optionBParts = pairs.map((pair, i) =>
        pair.left.toLowerCase() === answerParts[i].toLowerCase() ? pair.right : pair.left
      )
      const optionB = optionBParts.join(' / ')
      let cleanSentence = question.sentence
      pairs.slice().reverse().forEach(({ left, right }) => {
        cleanSentence = cleanSentence.replace(` ${left} / ${right} `, ' ___ ')
      })
      return (
        <li className={qItemClass}>
          {numSpan}
          <span className="leading-relaxed">{cleanSentence}</span>
          <div className="mt-2">
            <InlineChoiceButtons options={[optionA, optionB]} selected={answer} onSelect={onAnswerChange} checked={checked} correctAnswer={correctAnswer} />
          </div>
          {answerReveal}
          {explBlock}
        </li>
      )
    }
  }

  // ── circle_correct (single slash) ──
  if (exerciseType === 'circle_correct') {
    const parsed = parseCircleOptions(question.sentence || '', correctAnswer)
    if (parsed) {
      return (
        <li className={qItemClass}>
          {numSpan}
          <span>{parsed.before}</span>
          <InlineChoiceButtons options={[parsed.option1, parsed.option2]} selected={answer} onSelect={onAnswerChange} checked={checked} correctAnswer={correctAnswer} />
          <span>{parsed.after}</span>
          {answerReveal}
          {explBlock}
        </li>
      )
    }
  }

  // ── sentence_transformation ──
  if (exerciseType === 'sentence_transformation' && question.sentence1) {
    return (
      <li className={qItemClass}>
        {numSpan}
        <span className="italic text-gray-600">{question.sentence1}</span>
        {question.keyword && (
          <span className="ml-2 text-xs font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">[{question.keyword}]</span>
        )}
        <div className="mt-1.5">
          <FillSentence
            sentence={question.sentence2 || '______'}
            answers={answersObj}
            correctAnswers={correctAnswers}
            onChange={handleChange}
            checked={checked}
          />
        </div>
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── sentence_writing ──
  if (exerciseType === 'sentence_writing') {
    return (
      <li className={qItemClass}>
        {numSpan}
        <span className="text-blue-700 font-medium">{question.prompt || question.sentence || question.stem}</span>
        <div className="mt-1.5">
          <textarea
            value={answersObj[0] || ''}
            onChange={e => !checked && handleChange(0, e.target.value)}
            disabled={checked}
            rows={2}
            placeholder="Viết câu đầy đủ…"
            className={`w-full border-2 rounded-xl px-3 py-2 text-sm outline-none resize-none transition-colors ${
              checked
                ? isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'
                : 'border-blue-200 focus:border-blue-400 bg-white'
            }`}
          />
        </div>
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── key_word_transformation (single sentence + keyword chip) ──
  if ((exerciseType === 'key_word_transformation' || exerciseType === 'key_word_transform') && !question.sentence1) {
    return (
      <li className={qItemClass}>
        {numSpan}
        <FillSentence
          sentence={question.sentence || '______'}
          answers={answersObj}
          correctAnswers={correctAnswers}
          onChange={handleChange}
          checked={checked}
        />
        {question.keyword && (
          <span className="ml-2 text-xs font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">[{question.keyword}]</span>
        )}
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── word_formation ──
  if (exerciseType === 'word_formation' && question.capital_word) {
    return (
      <li className={qItemClass}>
        {numSpan}
        <FillSentence
          sentence={question.sentence}
          answers={answersObj}
          correctAnswers={correctAnswers}
          onChange={handleChange}
          checked={checked}
        />
        <span className="ml-2 font-mono text-xs bg-yellow-100 text-yellow-800 rounded-lg px-2 py-0.5 border border-yellow-200">{question.capital_word}</span>
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── anagram ──
  if (exerciseType === 'anagram') {
    const stem = (question.sentence || '').trim()
    if (stem && stem.includes('______')) {
      const [before, after = ''] = stem.split('______')
      return (
        <li className={qItemClass}>
          {numSpan}
          <span className="leading-relaxed">{before}</span>
          <InlineInput value={answersObj[0] || ''} onChange={v => handleChange(0, v)} checked={checked} isCorrect={isCorrect} size="lg" />
          <span className="leading-relaxed">{after}</span>
          <span className="ml-2 font-mono text-xs tracking-widest bg-amber-100 text-amber-900 rounded-lg px-2 py-0.5 border border-amber-200">{question.letters}</span>
          {answerReveal}
          {explBlock}
        </li>
      )
    }
    return (
      <li className={qItemClass}>
        {numSpan}
        <span className="font-mono text-base tracking-widest bg-amber-100 text-amber-900 rounded-lg px-2 py-0.5 mr-2 border border-amber-200">{question.letters}</span>
        <InlineInput value={answersObj[0] || ''} onChange={v => handleChange(0, v)} checked={checked} isCorrect={isCorrect} />
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── error_correction / word_swap / missing_word / extra_word / word_form ──
  if (['error_correction', 'word_swap', 'missing_word', 'extra_word', 'word_form'].includes(exerciseType)) {
    const stem = question.stem ?? question.sentence ?? ''
    return (
      <li className={qItemClass}>
        {numSpan}
        <span className="text-gray-700">{stem}</span>
        <span className="mx-1.5 text-gray-400">→</span>
        <InlineInput value={answersObj[0] || ''} onChange={v => handleChange(0, v)} checked={checked} isCorrect={isCorrect} />
        {answerReveal}
        {explBlock}
      </li>
    )
  }

  // ── default: fill_in_blank / word_bank / gap_fill / rewrite / etc ──
  const stem = question.sentence ?? question.stem ?? ''
  return (
    <li className={qItemClass}>
      {numSpan}
      <FillSentence
        sentence={stem}
        answers={answersObj}
        correctAnswers={correctAnswers}
        onChange={handleChange}
        checked={checked}
      />
      {answerReveal}
      {explBlock}
    </li>
  )
}
