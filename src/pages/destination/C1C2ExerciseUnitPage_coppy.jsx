import { useMemo, useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import C1C2_EXERCISES from '../../data/destination/c1c2-exercises.json'
import ExerciseBlock from '../../components/exercise/ExerciseBlock.jsx'

function parseUnitKey(section) {
  const m = section.match(/^(Unit\s+\d+|Review\s+\d+|Progress\s+Test\s+\d+)/i)
  return m ? m[1] : section
}

// Collect all distinct exercise letters across a set of pages
function getExerciseLetters(pages) {
  const seen = new Set()
  const order = []
  pages.forEach(page => {
    (page.exercises || []).forEach(ex => {
      const k = ex.exercise
      if (!seen.has(k)) { seen.add(k); order.push(k) }
    })
  })
  return order
}

const TYPE_COLORS = {
  fill_in_blank: { bg: '#dbeafe', text: '#1d4ed8', label: 'Fill in Blank' },
  multiple_choice: { bg: '#dcfce7', text: '#15803d', label: 'Multiple Choice' },
  gap_fill: { bg: '#fef3c7', text: '#b45309', label: 'Gap Fill' },
  circle_correct: { bg: '#fce7f3', text: '#be185d', label: 'Circle Correct' },
  word_bank: { bg: '#ede9fe', text: '#7c3aed', label: 'Word Bank' },
  rewrite: { bg: '#ccfbf1', text: '#0f766e', label: 'Rewrite' },
  sentence_transformation: { bg: '#ffedd5', text: '#c2410c', label: 'Sentence Transform' },
  sentence_writing: { bg: '#f0fdf4', text: '#16a34a', label: 'Sentence Writing' },
  error_correction: { bg: '#fee2e2', text: '#b91c1c', label: 'Error Correction' },
  word_formation: { bg: '#f3e8ff', text: '#9333ea', label: 'Word Formation' },
  matching: { bg: '#e0f2fe', text: '#0369a1', label: 'Matching' },
}

function getTypeInfo(type) {
  return TYPE_COLORS[type] ?? { bg: '#f3f4f6', text: '#374151', label: type ?? 'Exercise' }
}

export default function C1C2ExerciseUnitPage() {
  const { unitKey } = useParams()
  const navigate = useNavigate()
  const [activeLetter, setActiveLetter] = useState(null)
  const [structuredData, setStructuredData] = useState(null)
  const [scores, setScores] = useState({})
  const tabsRef = useRef(null)

  useEffect(() => {
    fetch('/c1c2-exercises-structured.json')
      .then(r => r.json())
      .then(setStructuredData)
      .catch(() => setStructuredData([]))
  }, [])

  const rawPages = useMemo(() => {
    const key = decodeURIComponent(unitKey)
    return C1C2_EXERCISES.filter(p => parseUnitKey(p.section || '') === key)
  }, [unitKey])

  const pages = useMemo(() => {
    if (!structuredData) return []
    const rawPageNums = new Set(rawPages.map(p => p.page))
    return structuredData.filter(p => rawPageNums.has(p.page))
  }, [structuredData, rawPages])

  // All exercises flat, grouped by letter
  const exercisesByLetter = useMemo(() => {
    const map = {}
    pages.forEach(page => {
      (page.exercises || []).forEach(ex => {
        const k = ex.exercise
        if (!map[k]) map[k] = []
        map[k].push({ ...ex, _page: page.page, _section: page.section })
      })
    })
    return map
  }, [pages])

  const letters = useMemo(() => getExerciseLetters(pages), [pages])

  useEffect(() => {
    if (letters.length > 0 && !activeLetter) setActiveLetter(letters[0])
  }, [letters])

  const unitName = decodeURIComponent(unitKey)

  // Scroll active tab into view
  useEffect(() => {
    if (tabsRef.current && activeLetter) {
      const btn = tabsRef.current.querySelector(`[data-letter="${activeLetter}"]`)
      btn?.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }, [activeLetter])

  // Total questions and answered for progress
  const totalExercises = letters.length
  const answeredExercises = Object.keys(scores).length

  const activeExercises = activeLetter ? (exercisesByLetter[activeLetter] || []) : []

  return (
    <div className="min-h-screen" style={{ background: '#f8f7ff' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #6b21a8 0%, #4f46e5 100%)' }} className="text-white">
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/destination/c1c2/exercises')}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 min-w-0">
              <div className="text-purple-200 text-xs font-medium tracking-wide uppercase">Destination C1 & C2</div>
              <h1 className="text-lg font-bold truncate">{unitName}</h1>
            </div>
            {/* Progress pill */}
            {totalExercises > 0 && (
              <div className="flex-shrink-0 text-xs px-3 py-1 rounded-full font-semibold" style={{ background: 'rgba(255,255,255,0.2)' }}>
                {answeredExercises}/{totalExercises}
              </div>
            )}
          </div>

          {/* Progress bar */}
          {totalExercises > 0 && (
            <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ background: '#FFD600', width: `${(answeredExercises / totalExercises) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Exercise letter tabs */}
      {letters.length > 0 && (
        <div
          ref={tabsRef}
          className="flex overflow-x-auto bg-white border-b border-gray-200 shadow-sm"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {letters.map(letter => {
            const exs = exercisesByLetter[letter] || []
            const typeInfo = exs[0] ? getTypeInfo(exs[0].type) : getTypeInfo(null)
            const isActive = activeLetter === letter
            return (
              <button
                key={letter}
                data-letter={letter}
                onClick={() => setActiveLetter(letter)}
                className="flex-shrink-0 flex flex-col items-center justify-center px-4 py-2.5 transition-all relative"
                style={{
                  borderBottom: isActive ? '3px solid #6b21a8' : '3px solid transparent',
                  background: isActive ? '#faf5ff' : 'transparent',
                  minWidth: 52,
                }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={isActive
                    ? { background: '#6b21a8', color: 'white' }
                    : { background: typeInfo.bg, color: typeInfo.text }
                  }
                >
                  {letter}
                </span>
                {scores[letter] && (
                  <span className="text-xs mt-0.5 font-medium" style={{ color: scores[letter].correct === scores[letter].total ? '#15803d' : '#b45309' }}>
                    {scores[letter].correct}/{scores[letter].total}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-5 pb-20">
        {!structuredData ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">Đang tải bài tập...</p>
          </div>
        ) : letters.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-gray-500 text-sm">Không tìm thấy bài tập cho {unitName}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {activeExercises.map((ex, i) => (
              <ExerciseBlock
                key={`${activeLetter}-${i}`}
                exercise={ex}
                exLabel={ex.exercise}
                sectionLabel={ex._section}
                onScoreUpdate={s => setScores(prev => ({ ...prev, [activeLetter]: s }))}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom nav between letters */}
      {letters.length > 1 && activeLetter && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                const idx = letters.indexOf(activeLetter)
                if (idx > 0) setActiveLetter(letters[idx - 1])
              }}
              disabled={letters.indexOf(activeLetter) === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-30"
              style={{ background: '#f3e8ff', color: '#6b21a8' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Phần {letters[letters.indexOf(activeLetter) - 1] ?? ''}
            </button>

            <span className="text-xs text-gray-400 font-medium">
              Phần {activeLetter} · {letters.indexOf(activeLetter) + 1}/{letters.length}
            </span>

            <button
              onClick={() => {
                const idx = letters.indexOf(activeLetter)
                if (idx < letters.length - 1) setActiveLetter(letters[idx + 1])
              }}
              disabled={letters.indexOf(activeLetter) === letters.length - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-30"
              style={{ background: '#6b21a8', color: 'white' }}
            >
              Phần {letters[letters.indexOf(activeLetter) + 1] ?? ''}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
