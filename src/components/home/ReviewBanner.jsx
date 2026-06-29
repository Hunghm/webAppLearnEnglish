import { useNavigate } from 'react-router-dom'
import { getDueCount } from '../../utils/sm2.js'
import { useEffect, useState } from 'react'

export default function ReviewBanner() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(getDueCount())
  }, [])

  const hasWords = count > 0

  return (
    <button
      onClick={() => hasWords && navigate('/flashcard', { state: { reviewMode: true } })}
      className={`w-full mx-0 rounded-xl p-4 flex items-center gap-3 text-left transition-all ${
        hasWords
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-md active:scale-98'
          : 'bg-gray-100 text-gray-400 cursor-default'
      }`}
    >
      <div className="text-3xl">🔔</div>
      <div className="flex-1">
        <div className="font-semibold text-sm">
          {hasWords ? `Ôn tập hôm nay` : 'Chưa có từ cần ôn'}
        </div>
        <div className={`text-xs ${hasWords ? 'text-blue-100' : 'text-gray-400'}`}>
          {hasWords
            ? `${count} từ đang chờ ôn tập theo SM-2`
            : 'Học flashcard và đánh dấu để theo dõi tiến độ'}
        </div>
      </div>
      {hasWords && (
        <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">
          {count}
        </div>
      )}
    </button>
  )
}
