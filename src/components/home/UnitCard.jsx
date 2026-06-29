import { useNavigate } from 'react-router-dom'
import { getWordsByUnit, getTopicsForUnit } from '../../data/quizData.js'

export default function UnitCard({ unit }) {
  const navigate = useNavigate()
  const wordCount = getWordsByUnit(unit.id).length
  const topicCount = getTopicsForUnit(unit.id).length

  return (
    <button
      onClick={() => navigate(`/category/${unit.id}`)}
      className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left w-full border border-gray-100"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
        {unit.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-800 text-sm">{unit.displayName}</div>
        <div className="text-xs text-gray-500 truncate">{unit.topic}</div>
        <div className="flex gap-3 mt-1">
          <span className="text-xs text-blue-600 font-medium">{wordCount} từ</span>
          <span className="text-xs text-gray-400">{topicCount} chủ đề</span>
        </div>
      </div>
      <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}
