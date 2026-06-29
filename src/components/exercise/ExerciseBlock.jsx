import { useState, useRef } from 'react'
import QuestionItem from './QuestionItem'
import { InlineInput, InlineChoiceButtons } from './SentenceRenderer'

const TYPE_META = {
  fill_in_blank: { label: 'Fill in the Blank', icon: '✏️', color: '#1d4ed8', bg: '#dbeafe' },
  multiple_choice: { label: 'Multiple Choice', icon: '🔘', color: '#15803d', bg: '#dcfce7' },
  sentence_writing: { label: 'Sentence Writing', icon: '📝', color: '#16a34a', bg: '#f0fdf4' },
  word_bank: { label: 'Word Bank', icon: '🗂️', color: '#7c3aed', bg: '#ede9fe' },
  circle_correct: { label: 'Circle the Correct Word', icon: '⭕', color: '#be185d', bg: '#fce7f3' },
  rewrite: { label: 'Rewrite', icon: '🔁', color: '#0f766e', bg: '#ccfbf1' },
  matching: { label: 'Matching', icon: '🔗', color: '#0369a1', bg: '#e0f2fe' },
  word_formation: { label: 'Word Formation', icon: '🔤', color: '#9333ea', bg: '#f3e8ff' },
  sentence_transformation: { label: 'Sentence Transformation', icon: '↔️', color: '#c2410c', bg: '#ffedd5' },
  key_word_transformation: { label: 'Key Word Transformation', icon: '🔑', color: '#b45309', bg: '#fef3c7' },
  error_correction: { label: 'Error Correction', icon: '🚫', color: '#b91c1c', bg: '#fee2e2' },
  anagram: { label: 'Word Scramble', icon: '🔀', color: '#6d28d9', bg: '#ede9fe' },
  gap_fill: { label: 'Gap Fill', icon: '📋', color: '#b45309', bg: '#fef3c7' },
  phrasal_verb: { label: 'Phrasal Verb', icon: '💬', color: '#0369a1', bg: '#e0f2fe' },
  substitution: { label: 'Substitution', icon: '🔄', color: '#374151', bg: '#f9fafb' },
  sentence_rewrite: { label: 'Sentence Rewrite', icon: '✍️', color: '#0f766e', bg: '#ccfbf1' },
  tick_cross: { label: 'True / False', icon: '✓✗', color: '#374151', bg: '#f3f4f6' },
  word_swap: { label: 'Word Swap', icon: '🔀', color: '#374151', bg: '#f3f4f6' },
  missing_word: { label: 'Missing Word', icon: '❓', color: '#374151', bg: '#f3f4f6' },
  extra_word: { label: 'Extra Word', icon: '➕', color: '#374151', bg: '#f3f4f6' },
  word_form: { label: 'Word Form', icon: '📚', color: '#374151', bg: '#f3f4f6' },
  crossword: { label: 'Crossword', icon: '⬛', color: '#374151', bg: '#f3f4f6' },
}

function getTypeMeta(type) {
  return TYPE_META[type] ?? { label: type ?? 'Exercise', icon: '📋', color: '#374151', bg: '#f3f4f6' }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Returns true if this question has more than 1 ______ blank.
 */
function isMultiBlankQuestion(question) {
  return ((question.sentence ?? question.sentence2 ?? '').split('______').length - 1) > 1
}

/**
 * Get the flat string value(s) stored for a question, for "answered" detection.
 * answer is either a string (single) or object { 0: '...', 1: '...' } (multi).
 */
function getAnsweredBlanks(answer, question) {
  if (isMultiBlankQuestion(question)) {
    const obj = typeof answer === 'object' && answer !== null ? answer : {}
    return Object.values(obj).filter(v => (v || '').trim())
  }
  return (answer || '').trim() ? [answer] : []
}

// ─── Word Bank ───────────────────────────────────────────────────────────────

function WordBankChips({ words, usedWordCounts, onChipClick }) {
  // Đếm số lần mỗi từ xuất hiện trong word_bank
  const wordCounts = words.reduce((acc, w) => {
    const key = w.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex flex-wrap gap-2 p-3 rounded-xl mb-4" style={{ background: '#f3e8ff', border: '1.5px solid #e9d5ff' }}>
      <span className="w-full text-xs font-semibold text-purple-600 mb-1">Word Bank</span>
      {words.map((w, i) => {
        const key = w.toLowerCase();
        const totalCount = wordCounts[key] || 1;
        const usedCount = usedWordCounts?.get(key) || 0;
        const isExhausted = usedCount >= totalCount;

        return (
          <span
            key={i}
            onClick={() => !isExhausted && onChipClick(w)}
            className="rounded-full px-3.5 py-1 text-sm font-medium transition-all select-none"
            style={isExhausted
              ? { background: 'white', color: '#c4b5fd', border: '1.5px dashed #c4b5fd', opacity: 0.6, cursor: 'default' }
              : { background: 'white', color: '#7c3aed', border: '1.5px solid #a78bfa', cursor: 'pointer' }
            }
          >
            {w}
            {totalCount > 1 && (
              <span className="ml-1 text-xs text-purple-300">
                ({usedCount}/{totalCount})
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

// ─── Gap-fill passage ────────────────────────────────────────────────────────

function PassageRenderer({ passage, questions, answers, checked, showAnswers, onAnswerChange }) {
  const parts = []
  const regex = /\((\d+)\)\s*______/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(passage)) !== null) {
    if (match.index > lastIndex) parts.push({ type: 'text', text: passage.slice(lastIndex, match.index) })
    const num = parseInt(match[1])
    parts.push({ type: 'input', num, question: questions.find(q => (q.id ?? q.num) === num) })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < passage.length) parts.push({ type: 'text', text: passage.slice(lastIndex) })

  return (
    <div className="rounded-xl px-5 py-4 text-sm leading-loose" style={{ background: '#fffbeb', border: '1.5px solid #fde68a' }}>
      {parts.map((part, i) => {
        if (part.type === 'text') {
          return part.text.split('\n').map((line, j, arr) => (
            <span key={`${i}-${j}`}>
              {j === 0 && i === 0
                ? <strong className="block text-base text-amber-800 mb-2">{line}</strong>
                : <>{line}{j < arr.length - 1 && <br />}</>
              }
            </span>
          ))
        }
        const { num, question } = part
        if (!question) return <span key={i} className="mx-1 text-gray-400">______</span>
        const id = question.id ?? question.num
        // Passage gap-fill: always single blank per marker, store as string
        const answer = answers[id] || ''
        const correctAnswer = question.answer ?? ''
        const isCorrect = answer.trim().toLowerCase() === correctAnswer.toLowerCase()
        return (
          <span key={i} className="inline-flex items-baseline gap-0.5 mx-0.5">
            <span className="text-amber-600 font-bold text-xs">({num})</span>
            <InlineInput value={answer} onChange={val => onAnswerChange(id, val)} checked={checked} isCorrect={isCorrect} />
            {showAnswers && correctAnswer && <span className="text-xs text-green-700 font-semibold ml-0.5">✓{correctAnswer}</span>}
          </span>
        )
      })}
    </div>
  )
}

// ─── Circle-correct passage ──────────────────────────────────────────────────

function CirclePassageRenderer({ passage, questions, answers, checked, showAnswers, onAnswerChange }) {
  const parts = []
  const regex = /\((\d+)\)\s+([^/\n(]+?)\s*\/\s*([^\n(]+?)(?=\s+\w|\s*[.,!?]|\s*$)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(passage)) !== null) {
    if (match.index > lastIndex) parts.push({ type: 'text', text: passage.slice(lastIndex, match.index) })
    const num = parseInt(match[1])
    parts.push({ type: 'choice', num, opt1: match[2].trim(), opt2: match[3].trim(), question: questions.find(q => (q.id ?? q.num) === num) })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < passage.length) parts.push({ type: 'text', text: passage.slice(lastIndex) })

  return (
    <div className="rounded-xl px-5 py-4 text-sm leading-loose" style={{ background: '#fdf2f8', border: '1.5px solid #fbcfe8' }}>
      {parts.map((part, i) => {
        if (part.type === 'text') {
          return part.text.split('\n').map((line, j, arr) => (
            <span key={`${i}-${j}`}>
              {j === 0 && i === 0
                ? <strong className="block text-base text-pink-800 mb-2">{line}</strong>
                : <>{line}{j < arr.length - 1 && <br />}</>
              }
            </span>
          ))
        }
        const { num, opt1, opt2, question } = part
        if (!question) return <span key={i} className="mx-1">{opt1} / {opt2}</span>
        const id = question.id ?? question.num
        const correctAnswer = question.answer ?? ''
        return (
          <span key={i} className="inline-flex items-baseline gap-0.5 mx-0.5">
            <span className="text-pink-600 font-bold text-xs">({num})</span>
            <InlineChoiceButtons
              options={[opt1, opt2]}
              selected={answers[id]}
              onSelect={val => onAnswerChange(id, val)}
              checked={checked}
              correctAnswer={correctAnswer}
            />
            {showAnswers && correctAnswer && <span className="text-xs text-green-700 font-semibold">✓{correctAnswer}</span>}
          </span>
        )
      })}
    </div>
  )
}

// ─── Score ring ──────────────────────────────────────────────────────────────

function ScoreRing({ correct, total }) {
  const pct = total > 0 ? correct / total : 0
  const isPerf = correct === total
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
          <circle
            cx="18" cy="18" r="14" fill="none"
            stroke={isPerf ? '#16a34a' : pct >= 0.5 ? '#d97706' : '#dc2626'}
            strokeWidth="3.5"
            strokeDasharray={`${pct * 87.96} 87.96`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: isPerf ? '#16a34a' : '#374151' }}>
          {correct}
        </div>
      </div>
      <div>
        <div className="text-sm font-bold" style={{ color: isPerf ? '#16a34a' : '#374151' }}>
          {correct}/{total} {isPerf && '🎉'}
        </div>
        <div className="text-xs text-gray-400">{Math.round(pct * 100)}% correct</div>
      </div>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function ExerciseBlock({ exercise, exLabel, sectionLabel, onScoreUpdate }) {
  const questions = exercise.questions ?? exercise.items ?? []
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [score, setScore] = useState(null)
  const focusedInputId = useRef(null)

  const meta = getTypeMeta(exercise.type)
  const hasWordBank = Array.isArray(exercise.word_bank) && exercise.word_bank.length > 0
  const passage = typeof exercise.passage === 'string' ? exercise.passage.trim() : ''
  const hasGapPassage = passage.length > 0 && /\(\d+\)\s*______/.test(passage)
  const hasCirclePassage = passage.length > 0 && !hasGapPassage && exercise.type === 'circle_correct'
  const hasReadingPassage = passage.length > 0 && !hasGapPassage && !hasCirclePassage
  const isDisplayOnly = exercise.type === 'crossword' || questions.length === 0

  // Flat set of all used string values (for word bank dedup)
  // const usedWords = new Set(
  //   questions.flatMap(q => {
  //     const a = answers[q.id ?? q.num]
  //     if (typeof a === 'object' && a !== null) return Object.values(a).map(v => (v || '').toLowerCase()).filter(Boolean)
  //     return [(a || '').toLowerCase()].filter(Boolean)
  //   })
  // )
  const usedWordCounts = new Map();
  questions.forEach(q => {
    const a = answers[q.id ?? q.num];
    if (typeof a === 'object' && a !== null) {
      Object.values(a).forEach(v => {
        const word = (v || '').toLowerCase().trim();
        if (word) {
          usedWordCounts.set(word, (usedWordCounts.get(word) || 0) + 1);
        }
      });
    } else {
      const word = (a || '').toLowerCase().trim();
      if (word) {
        usedWordCounts.set(word, (usedWordCounts.get(word) || 0) + 1);
      }
    }
  });

  // ── Answer change handlers ──

  /**
   * For passage-based renderers: answer is always a plain string keyed by question id.
   */
  const handlePassageAnswerChange = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }))
    if (checked) { setChecked(false); setShowAnswers(false); setScore(null) }
  }

  /**
   * For QuestionItem list: answer is either a string (single blank) or
   * an object { 0: '...', 1: '...' } (multi-blank).
   * QuestionItem calls onAnswerChange(val) where val is already the correct type.
   */
  const handleAnswerChange = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }))
    if (checked) { setChecked(false); setShowAnswers(false); setScore(null) }
    focusedInputId.current = id
  }

  // const handleWordChipClick = (word) => {
  //   // Find first unfilled question (single-blank only for word bank)
  //   const targetId = focusedInputId.current && !(answers[focusedInputId.current] || '').trim()
  //     ? focusedInputId.current
  //     : questions.map(q => q.id ?? q.num).find(id => !(answers[id] || '').trim())
  //   if (targetId === undefined) return
  //   handleAnswerChange(targetId, word)
  // }
  const handleWordChipClick = (word) => {
    // Ưu tiên ô trống đang được focus
    const focusedId = focusedInputId.current;

    if (focusedId) {
      const currentAnswer = answers[focusedId];
      const question = questions.find(q => (q.id ?? q.num) === focusedId);
      const blankCount = (question?.sentence ?? '').split('______').length - 1;

      // Kiểm tra multi-blank
      if (blankCount > 1) {
        const answerObj = typeof currentAnswer === 'object' && currentAnswer !== null ? currentAnswer : {};
        // Tìm blank đầu tiên chưa được điền trong câu này
        for (let i = 0; i < blankCount; i++) {
          if (!(answerObj[i] || '').trim()) {
            const newAnswer = { ...answerObj, [i]: word };
            handleAnswerChange(focusedId, newAnswer);
            return;
          }
        }
      } else if (!(currentAnswer || '').trim()) {
        // Single-blank chưa điền
        handleAnswerChange(focusedId, word);
        return;
      }
    }

    // Nếu không có focus, tìm câu hỏi đầu tiên có blank chưa điền (ưu tiên multi-blank)
    for (const q of questions) {
      const id = q.id ?? q.num;
      const answer = answers[id];
      const blankCount = (q.sentence ?? '').split('______').length - 1;

      if (blankCount > 1) {
        // Multi-blank: kiểm tra từng blank
        const answerObj = typeof answer === 'object' && answer !== null ? answer : {};
        for (let i = 0; i < blankCount; i++) {
          if (!(answerObj[i] || '').trim()) {
            const newAnswer = { ...answerObj, [i]: word };
            handleAnswerChange(id, newAnswer);
            return;
          }
        }
      } else if (!(answer || '').trim()) {
        // Single-blank
        handleAnswerChange(id, word);
        return;
      }
    }
  }

  // ── Score computation ──

  // const computeScore = () => {
  //   let correct = 0, total = 0
  //   questions.forEach(q => {
  //     const id = q.id ?? q.num
  //     const correctAns = (q.answer ?? '').trim()
  //     if (!correctAns) return

  //     total++
  //     const answer = answers[id]
  //     const blankCount = (q.sentence ?? '').split('______').length - 1

  //     if (blankCount > 1) {
  //       // Multi-blank: answer is { 0: '...', 1: '...' }
  //       const correctParts = correctAns.split(' / ').map(s => s.trim())
  //       const answersObj = typeof answer === 'object' && answer !== null ? answer : {}
  //       const allCorrect = correctParts.every((part, i) =>
  //         (answersObj[i] || '').trim().toLowerCase() === part.toLowerCase()
  //       )
  //       if (allCorrect) correct++
  //     } else {
  //       // Single blank: answer is a plain string; accept slash-separated alternatives
  //       const given = (answer || '').trim().toLowerCase()
  //       const accepted = correctAns.toLowerCase().split('/').map(s => s.trim())
  //       if (accepted.includes(given)) correct++
  //     }
  //   })
  //   return { correct, total }
  // }
  const computeScore = () => {
    let correct = 0, total = 0;
    questions.forEach(q => {
      const id = q.id ?? q.num;
      const correctAns = (q.answer ?? '').trim();
      if (!correctAns) return;

      total++;
      const answer = answers[id];
      const blankCount = (q.sentence ?? '').split('______').length - 1;

      if (blankCount > 1) {
        // Multi-blank: answer là object { 0: '...', 1: '...' }
        const correctParts = correctAns.split(' / ').map(s => s.trim());
        const answersObj = typeof answer === 'object' && answer !== null ? answer : {};
        const allCorrect = correctParts.every((part, i) =>
          (answersObj[i] || '').trim().toLowerCase() === part.toLowerCase()
        );
        if (allCorrect) correct++;
      } else {
        // Single blank: answer là string
        const given = (answer || '').trim().toLowerCase();
        const accepted = correctAns.toLowerCase().split('/').map(s => s.trim());
        if (accepted.includes(given)) correct++;
      }
    });
    return { correct, total };
  };

  const handleCheck = () => {
    const s = computeScore()
    setScore(s)
    setChecked(true)
    onScoreUpdate?.(s)
  }

  const handleShowAnswers = () => {
    if (!checked) handleCheck()
    setShowAnswers(true)
  }

  const handleReset = () => {
    setAnswers({})
    setChecked(false)
    setShowAnswers(false)
    setScore(null)
    focusedInputId.current = null
  }

  // Progress: count answered blanks across all questions
  const answeredCount = questions.filter(q => {
    const a = answers[q.id ?? q.num]
    return getAnsweredBlanks(a, q).length > 0
  }).length
  const progressPct = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0
  const answerableQs = questions.filter(q => (q.answer ?? '').trim())

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: '1.5px solid #e5e7eb' }}>

      {/* Exercise header */}
      <div className="px-5 py-4" style={{ background: `linear-gradient(135deg, ${meta.bg} 0%, white 60%)` }}>
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl text-white flex-shrink-0 shadow-sm"
            style={{ background: meta.color }}
          >
            {exLabel}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: meta.bg, color: meta.color }}>
                <span>{meta.icon}</span>
                <span>{meta.label}</span>
              </span>
              {sectionLabel && (
                <span className="text-xs text-gray-400">{sectionLabel}</span>
              )}
            </div>
            {exercise.title && (
              <p className="text-sm text-gray-700 leading-relaxed">{exercise.title}</p>
            )}
          </div>
        </div>

        {questions.length > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{answeredCount}/{questions.length} câu đã điền</span>
              {answerableQs.length > 0 && <span>{answerableQs.length} câu có đáp án</span>}
            </div>
            <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%`, background: meta.color }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        {hasWordBank && (
          <WordBankChips
            words={exercise.word_bank}
            usedWordCounts={usedWordCounts}
            onChipClick={handleWordChipClick}
          />
        )}

        {hasReadingPassage && (
          <div className="rounded-xl px-5 py-4 mb-4 text-sm leading-relaxed text-gray-700 whitespace-pre-line" style={{ background: '#fffbeb', border: '1.5px solid #fde68a' }}>
            {passage}
          </div>
        )}
        {
          exercise.type === 'crossword' ? (
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid #ddd',
                height: '900px'
              }}
            >
              <iframe
                src={exercise.html}
                title="Crossword"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  background: "#fff"
                }}
              />
            </div>
          ) : isDisplayOnly ? (
            <div
              className="rounded-xl px-4 py-8 text-center text-sm text-gray-400"
              style={{
                background: '#f9fafb',
                border: '1.5px dashed #e5e7eb'
              }}
            >
              <div className="text-2xl mb-2">📖</div>
              Bài tập này cần sách giáo khoa để thực hành.
            </div>
          ) :
            hasGapPassage ? (
              <PassageRenderer
                passage={passage}
                questions={questions}
                answers={answers}
                checked={checked}
                showAnswers={showAnswers}
                onAnswerChange={handlePassageAnswerChange}
              />
            ) : hasCirclePassage ? (
              <CirclePassageRenderer
                passage={passage}
                questions={questions}
                answers={answers}
                checked={checked}
                showAnswers={showAnswers}
                onAnswerChange={handlePassageAnswerChange}
              />
            ) : (
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {questions.map(q => {
                  const id = q.id ?? q.num
                  return (
                    <QuestionItem
                      key={id}
                      question={q}
                      exerciseType={exercise.type}
                      checked={checked}
                      answer={answers[id]}
                      onAnswerChange={val => handleAnswerChange(id, val)}
                      showAnswer={showAnswers}
                    />
                  )
                })}
              </ul>
            )
        }

        {/* Action bar */}
        {!isDisplayOnly && questions.length > 0 && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCheck}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all active:scale-95 shadow-sm"
                style={{ background: meta.color }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Kiểm tra
              </button>
              <button
                onClick={handleShowAnswers}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
                style={{ background: '#f3e8ff', color: '#7c3aed' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Xem đáp án
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
                style={{ background: '#f3f4f6', color: '#6b7280' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Làm lại
              </button>

              {score !== null && (
                <div className="ml-auto">
                  <ScoreRing correct={score.correct} total={score.total} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
