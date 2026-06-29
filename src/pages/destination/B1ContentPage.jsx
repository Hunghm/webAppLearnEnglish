import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/layout/PageHeader.jsx'
import { GRAMMAR_B1 } from '../../data/destination/b1-grammar.js'
import { VOCAB_B1 } from '../../data/destination/b1-vocabulary.js'
import { EXERCISES_B1 } from '../../data/destination/b1-exercises.js'

// ── Vocabulary unit metadata ──
const VOCAB_UNITS = [
  { unitId: 2,  name: 'Travel and transport',       emoji: '✈️' },
  { unitId: 4,  name: 'Hobbies, sport and games',   emoji: '⚽' },
  { unitId: 6,  name: 'Science and technology',     emoji: '🔬' },
  { unitId: 8,  name: 'The media',                  emoji: '📰' },
  { unitId: 10, name: 'People and society',         emoji: '👥' },
  { unitId: 12, name: 'The law and crime',           emoji: '⚖️' },
  { unitId: 14, name: 'Health and fitness',          emoji: '💪' },
  { unitId: 16, name: 'Food and drink',              emoji: '🍽️' },
  { unitId: 18, name: 'Education',                   emoji: '🎓' },
  { unitId: 20, name: 'The environment',             emoji: '🌿' },
  { unitId: 22, name: 'Shopping and money',          emoji: '🛒' },
  { unitId: 24, name: 'Entertainment',               emoji: '🎭' },
  { unitId: 26, name: 'Fashion and design',          emoji: '👗' },
  { unitId: 28, name: 'Work and business',           emoji: '💼' },
]

// ── Group exercises by unit ──
function groupExercises() {
  const groups = {}
  EXERCISES_B1.forEach(ex => {
    const key = ex.section || 'Other'
    if (!groups[key]) groups[key] = []
    groups[key].push(ex)
  })
  return Object.entries(groups).map(([section, pages]) => ({ section, pages }))
}

// ── Mode Modal (inline) ──
function VocabModeModal({ unit, onClose, navigate }) {
  const words = VOCAB_B1.filter(w => w.unitId === unit.unitId)

  const launch = (mode) => {
    onClose()
    navigate(`/${mode}`, {
      state: {
        words,
        studySetName: `B1 – Unit ${unit.unitId}: ${unit.name}`,
      }
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={onClose}>
      <div
        className="bg-white rounded-t-2xl w-full max-w-lg mx-auto p-6 pb-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="text-2xl mb-1">{unit.emoji}</div>
          <h2 className="text-lg font-bold text-gray-800">Unit {unit.unitId}: {unit.name}</h2>
          <p className="text-sm text-gray-400">{words.length} từ</p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => launch('flashcard')}
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
          >
            <span className="text-xl">🃏</span> Flashcard
          </button>
          <button
            onClick={() => launch('quiz')}
            disabled={words.length < 4}
            className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-xl">🧠</span> Quiz
            {words.length < 4 && <span className="text-xs font-normal">(cần ít nhất 4 từ)</span>}
          </button>
          <button
            onClick={() => launch('spelling')}
            className="w-full py-3.5 bg-violet-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-violet-700 transition-all"
          >
            <span className="text-xl">✍️</span> Spelling
          </button>
        </div>
        <button onClick={onClose} className="w-full mt-3 py-2.5 text-gray-500 text-sm">Hủy</button>
      </div>
    </div>
  )
}

// ── Exercise text viewer ──
function ExerciseViewer({ group, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-2xl my-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-orange-600 text-white px-5 py-4 flex items-center justify-between">
          <h2 className="font-bold text-base">{group.section}</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white text-2xl leading-none">×</button>
        </div>
        <div className="p-5 space-y-6 max-h-[70vh] overflow-y-auto">
          {group.pages.map((page, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 font-medium border-b border-gray-100">
                Page {page.page}
              </div>
              <pre className="px-4 py-3 text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                {page.text}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Page ──
export default function B1ContentPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('grammar')
  const [selectedVocabUnit, setSelectedVocabUnit] = useState(null)
  const [selectedExerciseGroup, setSelectedExerciseGroup] = useState(null)

  const exerciseGroups = groupExercises()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader
        title="Destination B1"
        subtitle="Grammar · Vocabulary · Exercises"
        onBack={() => navigate('/destination')}
      />

      {/* Tab bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex">
          {[
            { id: 'grammar',    label: 'Grammar',    emoji: '📝' },
            { id: 'vocab',      label: 'Vocabulary', emoji: '📖' },
            { id: 'exercises',  label: 'Exercises',  emoji: '✏️' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-4 pb-16">

        {/* ── Grammar Tab ── */}
        {activeTab === 'grammar' && (
          <div className="space-y-2">
            <p className="text-xs text-gray-400 mb-3">14 grammar units – tap to study</p>
            {GRAMMAR_B1.map((lesson, idx) => (
              <button
                key={lesson.unit}
                onClick={() => navigate(`/destination/b1/grammar/${idx}`)}
                className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-blue-700 text-sm flex-shrink-0">
                  {lesson.unit}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 text-sm">{lesson.title}</div>
                  <div className="text-xs text-gray-400 truncate mt-0.5">{lesson.subtitle}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* ── Vocabulary Tab ── */}
        {activeTab === 'vocab' && (
          <div className="space-y-2">
            <p className="text-xs text-gray-400 mb-3">14 vocabulary units – tap to practice</p>
            {VOCAB_UNITS.map(unit => {
              const count = VOCAB_B1.filter(w => w.unitId === unit.unitId).length
              return (
                <button
                  key={unit.unitId}
                  onClick={() => setSelectedVocabUnit(unit)}
                  className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
                >
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {unit.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-sm">Unit {unit.unitId}: {unit.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{count} từ</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            })}
          </div>
        )}

        {/* ── Exercises Tab ── */}
        {activeTab === 'exercises' && (
          <div className="space-y-2">
            <p className="text-xs text-gray-400 mb-3">{exerciseGroups.length} sections – tap to view</p>
            {exerciseGroups.map((group, i) => (
              <button
                key={i}
                onClick={() => setSelectedExerciseGroup(group)}
                className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
              >
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  ✏️
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 text-sm">{group.section}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{group.pages.length} page{group.pages.length > 1 ? 's' : ''}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Vocab mode modal */}
      {selectedVocabUnit && (
        <VocabModeModal
          unit={selectedVocabUnit}
          onClose={() => setSelectedVocabUnit(null)}
          navigate={navigate}
        />
      )}

      {/* Exercise viewer modal */}
      {selectedExerciseGroup && (
        <ExerciseViewer
          group={selectedExerciseGroup}
          onClose={() => setSelectedExerciseGroup(null)}
        />
      )}
    </div>
  )
}
