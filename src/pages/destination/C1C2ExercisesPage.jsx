import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import C1C2_EXERCISES from '../../data/destination/c1c2-exercises.json'

function parseUnitKey(section) {
  const m = section.match(/^(Unit\s+\d+|Review\s+\d+|Progress\s+Test\s+\d+)/i)
  return m ? m[1] : section
}

function clickFunction() {
  
}

function getUnitNumber(unit) {
  const m = unit.match(/\d+/)
  return m ? parseInt(m[0]) : 999
}

function isReview(unit) {
  return /review/i.test(unit)
}

function isProgress(unit) {
  return /progress/i.test(unit)
}

function groupExercises() {
  const map = {}
  const order = []
  C1C2_EXERCISES.forEach(page => {
    const key = parseUnitKey(page.section || '')
    if (!map[key]) { map[key] = { unit: key, pages: [], sections: new Set() }; order.push(key) }
    map[key].pages.push(page)
    map[key].sections.add(page.section)
  })
  return order.map(k => ({ ...map[k], sections: [...map[k].sections] }))
}

const UNIT_COLORS = [
  { bg: '#6b21a8', light: '#f3e8ff', text: '#6b21a8' },
  { bg: '#1d4ed8', light: '#dbeafe', text: '#1d4ed8' },
  { bg: '#0f766e', light: '#ccfbf1', text: '#0f766e' },
  { bg: '#b45309', light: '#fef3c7', text: '#b45309' },
  { bg: '#be185d', light: '#fce7f3', text: '#be185d' },
  { bg: '#7c3aed', light: '#ede9fe', text: '#7c3aed' },
]

function getColor(unit) {
  if (isReview(unit)) return { bg: '#374151', light: '#f3f4f6', text: '#374151' }
  if (isProgress(unit)) return { bg: '#b91c1c', light: '#fee2e2', text: '#b91c1c' }
  const n = getUnitNumber(unit)
  return UNIT_COLORS[(n - 1) % UNIT_COLORS.length]
}

export default function C1C2ExercisesPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all') // all | unit | review
  const groups = useMemo(() => groupExercises(), [])

  const filtered = useMemo(() => {
    let g = groups
    if (filter === 'unit') g = g.filter(x => !isReview(x.unit) && !isProgress(x.unit))
    if (filter === 'review') g = g.filter(x => isReview(x.unit) || isProgress(x.unit))
    if (!search.trim()) return g
    const q = search.toLowerCase()
    return g.filter(x => x.unit.toLowerCase().includes(q))
  }, [groups, search, filter])

  const unitCount = groups.filter(g => !isReview(g.unit) && !isProgress(g.unit)).length
  const reviewCount = groups.filter(g => isReview(g.unit) || isProgress(g.unit)).length

  return (
    <div className="min-h-screen" style={{ background: '#f8f7ff' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #6b21a8 0%, #4f46e5 100%)' }} className="text-white">
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-5">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate('/destination/c1c2')}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <div className="text-purple-200 text-xs font-medium tracking-wide uppercase mb-0.5">Destination C1 & C2</div>
              <h1 className="text-xl font-bold">Bài tập Grammar & Vocabulary</h1>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-2 mb-4">
            {[
              { label: 'Units', value: unitCount, icon: '📖' },
              { label: 'Reviews', value: reviewCount, icon: '📝' },
              { label: 'Tổng trang', value: groups.reduce((a, g) => a + g.pages.length, 0), icon: '📄' },
            ].map(s => (
              <div key={s.label} className="flex-1 rounded-xl py-2 px-3 text-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="text-lg font-bold">{s.value}</div>
                <div className="text-purple-200 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Tìm unit, review..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none text-white placeholder-purple-300"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)' }}
            />
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 flex gap-1 py-2">
          {[
            { key: 'all', label: `Tất cả (${groups.length})` },
            { key: 'unit', label: `Units (${unitCount})` },
            { key: 'review', label: `Reviews (${reviewCount})` },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className="flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all"
              style={filter === tab.key
                ? { background: '#6b21a8', color: 'white' }
                : { background: '#f3f4f6', color: '#6b7280' }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Unit grid */}
      <div className="max-w-3xl mx-auto px-4 py-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(group => {
            const color = getColor(group.unit)
            const num = getUnitNumber(group.unit)
            return (
              <button
                key={group.unit}
                onClick={
                  () => {
                    // console.log(`/destination/c1c2/exercises/${encodeURIComponent(group.unit)}`)
                    navigate(`/destination/c1c2/exercises/${encodeURIComponent(group.unit)}`)
                  }
              }
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100 flex"
              >
                {/* Left accent */}
                <div className="w-1.5 flex-shrink-0" style={{ background: color.bg }} />

                {/* Content */}
                <div className="flex-1 p-4 flex items-center gap-3 min-w-0">
                  {/* Number badge */}
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 flex flex-col items-center justify-center font-bold text-white text-xs leading-tight" style={{ background: color.bg }}>
                    {isProgress(group.unit)
                      ? <span className="text-base">📊</span>
                      : isReview(group.unit)
                        ? <><span className="text-base">📝</span></>
                        : <><span className="text-xs opacity-75">Unit</span><span className="text-base leading-none">{num}</span></>
                    }
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm">{group.unit}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: color.light, color: color.text }}>
                        {group.pages.length} trang
                      </span>
                      <span className="text-xs text-gray-400 truncate">
                        {group.sections.slice(0, 2).join(' · ')}
                      </span>
                    </div>
                  </div>

                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-gray-500 text-sm">Không tìm thấy kết quả cho "{search}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
