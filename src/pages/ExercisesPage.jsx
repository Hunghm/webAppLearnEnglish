import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExercises, groupPagesByUnit } from '../hooks/useExercises'
import { getAllProgress, summariseUnit } from '../utils/exerciseProgress'
import BottomNav from '../components/layout/BottomNav.jsx'

export default function ExercisesPage() {
  const navigate = useNavigate()
  const { data, loading } = useExercises()
  const [search, setSearch] = useState('')

  const groups = useMemo(() => groupPagesByUnit(data), [data])
  // Re-read on every render; the page remounts on navigation so this stays fresh.
  const progressBlob = getAllProgress()

  const filtered = useMemo(() => {
    if (!search.trim()) return groups
    const q = search.toLowerCase()
    return groups.filter(g => g.unit.toLowerCase().includes(q))
  }, [groups, search])

  return (
    <div className="min-h-screen lg:flex" style={{ background: '#f0f4f8' }}>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 shadow-sm z-20">
        <div className="text-white px-6 py-5 flex-shrink-0" style={{ background: '#1565C0' }}>
          <h1 className="text-xl font-bold">📚 QuizzLearning</h1>
          <p className="text-blue-200 text-sm mt-0.5">Học tiếng Anh hiệu quả</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left">
            <span className="text-xl">📖</span><span>Từ vựng</span>
          </button>
          <button onClick={() => navigate('/?tab=grammar')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left">
            <span className="text-xl">📝</span><span>Ngữ pháp</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-blue-50 text-blue-600 text-left">
            <span className="text-xl">✏️</span><span>Bài tập</span>
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <p className="text-xs text-gray-400 text-center">QuizzLearning v1.0</p>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-64 flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="text-white text-center px-4 py-4" style={{ background: '#1565C0' }}>
          <h1 className="text-lg font-bold tracking-wide">✏️ Bài tập Grammar & Vocabulary</h1>
          <p className="text-blue-200 text-xs mt-0.5">{groups.length} units · Chọn unit để bắt đầu</p>
        </div>

        <div className="max-w-4xl mx-auto w-full px-4 lg:px-8 pb-24 lg:pb-10 pt-4">
          {/* Search */}
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Tìm unit..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 shadow-sm"
            />
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-3 animate-bounce">📖</div>
              <p className="text-sm">Đang tải bài tập...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {filtered.map(group => {
                const sections = [...new Set(group.sections.map(s => s.section))]
                const prog = summariseUnit(group.unit, progressBlob)
                const allDone = prog.done > 0 && prog.done >= group.totalExercises
                const pct = group.totalExercises > 0
                  ? Math.round((prog.done / group.totalExercises) * 100)
                  : 0
                return (
                  <button
                    key={group.unit}
                    onClick={() => navigate(`/exercises/${encodeURIComponent(group.unit)}`)}
                    className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xs flex-shrink-0"
                      style={{ background: allDone ? '#43A047' : '#1565C0' }}
                    >
                      {allDone ? '✓' : '✏️'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm">{group.unit}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {group.totalExercises} bài · {sections.slice(0, 2).join(', ')}
                      </p>
                      {prog.done > 0 && (
                        <div className="mt-1.5">
                          <div className="flex justify-between text-[0.65rem] text-gray-400 mb-0.5">
                            <span>{prog.done}/{group.totalExercises} đã làm</span>
                            <span>{pct}%</span>
                          </div>
                          <div className="h-1 rounded-full overflow-hidden bg-gray-100">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{ width: `${pct}%`, background: allDone ? '#43A047' : '#1565C0' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav activeTab="exercises" onTabChange={(tab) => {
        if (tab === 'vocab') navigate('/')
        else if (tab === 'grammar') navigate('/?tab=grammar')
      }} />
    </div>
  )
}
