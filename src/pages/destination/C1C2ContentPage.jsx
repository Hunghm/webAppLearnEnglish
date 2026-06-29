import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/layout/BottomNav.jsx'
import { ALL_GRAMMAR } from '../../data/destination/c1c2-grammar.js'
import { ALL_VOCABULARY } from '../../data/destination/c1c2-vocabulary.js'

const VOCAB_UNITS = [
  { unitId: 'unit2',  num: 2,  displayName: 'Unit 2',  emoji: '🧠',  topic: 'Thinking and learning' },
  { unitId: 'unit4',  num: 4,  displayName: 'Unit 4',  emoji: '⚙️',  topic: 'Change and technology' },
  { unitId: 'unit6',  num: 6,  displayName: 'Unit 6',  emoji: '⏱️',  topic: 'Time and work' },
  { unitId: 'unit8',  num: 8,  displayName: 'Unit 8',  emoji: '🚄',  topic: 'Movement and transport' },
  { unitId: 'unit10', num: 10, displayName: 'Unit 10', emoji: '📡',  topic: 'Communication and the media' },
  { unitId: 'unit12', num: 12, displayName: 'Unit 12', emoji: '🍃',  topic: 'Chance and nature' },
  { unitId: 'unit14', num: 14, displayName: 'Unit 14', emoji: '💰',  topic: 'Quantity and money' },
  { unitId: 'unit16', num: 16, displayName: 'Unit 16', emoji: '🏗️', topic: 'Materials and the built environment' },
  { unitId: 'unit18', num: 18, displayName: 'Unit 18', emoji: '❤️',  topic: 'Reactions and health' },
  { unitId: 'unit20', num: 20, displayName: 'Unit 20', emoji: '⚡',  topic: 'Power and social issues' },
  { unitId: 'unit22', num: 22, displayName: 'Unit 22', emoji: '🎨',  topic: 'Quality and the arts' },
  { unitId: 'unit24', num: 24, displayName: 'Unit 24', emoji: '🤝',  topic: 'Relationships and people' },
  { unitId: 'unit26', num: 26, displayName: 'Unit 26', emoji: '🎯',  topic: 'Preference and leisure activities' },
]

export default function C1C2ContentPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('vocab')

  const handleTabChange = (tab) => {
    if (tab === 'exercises') { navigate('/destination/c1c2/exercises'); return }
    if (tab === 'destination') { navigate('/destination'); return }
    setActiveTab(tab)
  }

  const sidebarBtn = (label, emoji, active, onClick) => (
    <button onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${active ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}>
      <span className="text-xl">{emoji}</span><span>{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 shadow-sm z-20">
        <div className="bg-purple-700 text-white px-6 py-5 flex-shrink-0">
          <h1 className="text-xl font-bold">👑 Destination C1/C2</h1>
          <p className="text-purple-200 text-sm mt-0.5">Advanced / Mastery</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          {sidebarBtn('Từ vựng', '📖', activeTab === 'vocab', () => setActiveTab('vocab'))}
          {sidebarBtn('Ngữ pháp', '📝', activeTab === 'grammar', () => setActiveTab('grammar'))}
          {sidebarBtn('Bài tập', '✏️', false, () => navigate('/destination/c1c2/exercises'))}
          {sidebarBtn('← Quay lại', '🏆', false, () => navigate('/destination'))}
        </nav>
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <p className="text-xs text-gray-400 text-center">QuizzLearning v1.0</p>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-64 flex-1 min-w-0 flex flex-col">

        {/* Mobile header */}
        <div className="lg:hidden bg-purple-700 text-white px-4 pt-4 pb-6">
          <button onClick={() => navigate('/destination')} className="text-purple-200 text-xs mb-2">← Destination</button>
          <h1 className="text-xl font-bold">👑 Destination C1/C2</h1>
          <p className="text-purple-200 text-sm mt-0.5">Advanced / Mastery</p>
        </div>

        {/* Desktop title bar */}
        <div className="hidden lg:flex items-center bg-white border-b border-gray-200 px-8 py-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800">
            {activeTab === 'vocab' ? '📖 Từ vựng' : '📝 Ngữ pháp'}
          </h2>
        </div>

        {/* Mobile tab bar */}
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="flex">
            {[
              { id: 'vocab', label: 'Từ vựng', emoji: '📖' },
              { id: 'grammar', label: 'Ngữ pháp', emoji: '📝' },
              { id: 'exercises', label: 'Bài tập', emoji: '✏️' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1 py-3 text-xs font-semibold border-b-2 transition-colors ${activeTab === tab.id ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-400'}`}
              >
                <span>{tab.emoji}</span><span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 pb-24 lg:pb-10 pt-4">

          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {VOCAB_UNITS.map(unit => {
                const wordCount = ALL_VOCABULARY.filter(w => w.unitId === unit.unitId).length
                return (
                  <button
                    key={unit.unitId}
                    onClick={() => navigate(`/destination/c1c2/vocab/${unit.unitId}`)}
                    className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left w-full border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {unit.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-sm">{unit.displayName}</div>
                      <div className="text-xs text-gray-500 truncate">{unit.topic}</div>
                      <span className="text-xs text-purple-600 font-medium">{wordCount} từ</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              })}
            </div>
          )}

          {activeTab === 'grammar' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {ALL_GRAMMAR.map((lesson, idx) => (
                <button
                  key={lesson.unit}
                  onClick={() => navigate(`/destination/c1c2/grammar/${idx}`)}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
                >
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center font-bold text-purple-700 text-sm flex-shrink-0">
                    {lesson.unit}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-sm truncate">{lesson.topic}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
