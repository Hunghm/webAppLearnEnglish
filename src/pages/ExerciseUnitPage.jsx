import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useExercises, groupPagesByUnit } from '../hooks/useExercises'
import ExerciseBlock from '../components/exercise/ExerciseBlock'

export default function ExerciseUnitPage() {
  const { unitKey } = useParams()
  const navigate = useNavigate()
  const { data, loading } = useExercises()
  const [activeIdx, setActiveIdx] = useState(0)
  // scores[i] = { correct, total } or null
  const [scores, setScores] = useState({})
  

  const unitData = useMemo(() => {
    if (!data) return null
    const groups = groupPagesByUnit(data)
    return groups.find(g => g.unit === decodeURIComponent(unitKey)) ?? null
  }, [data, unitKey])

  // Flatten all exercises across all sections/pages
  const allExercises = useMemo(() => {
    if (!unitData) return []
    return unitData.sections.flatMap(s =>
      s.exercises.map(ex => ({ ...ex, sectionName: s.section }))
    )
  }, [unitData])

  const activeEx = allExercises[activeIdx]
  const unitName = decodeURIComponent(unitKey)
  const totalEx = allExercises.length

  return (
    <div className="min-h-screen" style={{ background: '#f0f4f8' }}>

      {/* Header */}
      <div className="text-white text-center px-5 py-4" style={{ background: '#1565C0' }}>
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/exercises')}
            className="p-1.5 rounded-full hover:bg-blue-700 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-lg font-bold tracking-wide">{unitName}</h1>
            <p className="text-blue-200 text-xs mt-0.5">{totalEx} exercises · Click a tab to start</p>
          </div>
          <div className="w-8" />
        </div>
      </div>

      {/* Tab bar */}
      {!loading && allExercises.length > 0 && (
        <div
          className="flex overflow-x-auto"
          style={{ background: '#1976D2', scrollbarWidth: 'none' }}
        >
          {allExercises.map((ex, i) => {
            const sc = scores[i]
            const isPerfect = sc && sc.correct === sc.total
            const isActive = activeIdx === i
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="flex-1 min-w-[48px] flex flex-col items-center justify-center py-3 px-2 border-b-3 text-sm font-semibold transition-all whitespace-nowrap"
                style={{
                  color: isActive ? 'white' : 'rgba(255,255,255,0.65)',
                  borderBottom: isActive ? '3px solid #FFD600' : '3px solid transparent',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {ex.exercise}
                {sc && (
                  <span
                    className="text-xs rounded-full px-1 mt-0.5"
                    style={{
                      background: isPerfect ? '#4CAF50' : 'rgba(255,255,255,0.25)',
                      color: 'white',
                      fontSize: '0.6rem',
                      padding: '1px 5px',
                    }}
                  >
                    {sc.correct}/{sc.total}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-5 pb-12">
        {loading ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-3 animate-bounce">📖</div>
            <p className="text-sm">Đang tải bài tập...</p>
          </div>
        ) : !unitData ? (
          <div className="text-center py-20 text-gray-400 text-sm">Không tìm thấy bài tập</div>
        ) : activeEx ? (
          <ExerciseBlock
            key={`${unitKey}-${activeIdx}`}
            exercise={activeEx}
            exLabel={activeEx.exercise}
            onScoreUpdate={(sc) => setScores(prev => ({ ...prev, [activeIdx]: sc }))}
          />
        ) : null}
      </div>
    </div>
  )
}
