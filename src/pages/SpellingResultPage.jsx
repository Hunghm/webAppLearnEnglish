import { useLocation, useNavigate } from 'react-router-dom'
import { useTTS } from '../hooks/useTTS.js'

const FEEDBACK = [
  { min: 90, emoji: '🎉', title: 'Xuất sắc!', msg: 'Bạn nhớ mặt chữ rất tốt!' },
  { min: 70, emoji: '👍', title: 'Tốt lắm!', msg: 'Tiếp tục phát huy nhé!' },
  { min: 50, emoji: '😊', title: 'Khá ổn!', msg: 'Ôn lại các từ còn sai một chút nữa!' },
  { min: 0,  emoji: '💪', title: 'Cố gắng thêm!', msg: 'Đừng nản, luyện lại các từ đã sai nhé!' },
]

const getWord = (w) => w.word
const getDef = (w) => w.def || w.definition || ''

function WordList({ title, icon, accent, items, onSpeak }) {
  if (!items || items.length === 0) return null
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <span className={`font-bold ${accent}`}>{icon}</span>
        <h3 className="font-semibold text-gray-800 text-sm">{title} ({items.length})</h3>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((w, i) => (
          <li key={i} className="py-2 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-gray-800">{getWord(w)}</div>
              {getDef(w) && <div className="text-xs text-gray-500 mt-0.5">{getDef(w)}</div>}
            </div>
            <button
              onClick={() => onSpeak(getWord(w))}
              className="shrink-0 text-gray-400 hover:text-blue-600 p-1"
              aria-label="Nghe phát âm"
            >
              🔊
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SpellingResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { speak } = useTTS()

  const {
    score = 0, total = 0, unitId, source, words, studySetName,
    firstTryCorrect = [], firstTryWrong = [],
  } = location.state || {}

  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0
  const feedback = FEEDBACK.find(f => accuracy >= f.min)

  const handleRetry = () => {
    navigate('/spelling', {
      state: { unitId, source, words, studySetName }
    })
  }

  const handleRetryWrong = () => {
    navigate('/spelling', {
      state: { unitId, source, words: firstTryWrong, studySetName }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-violet-600 text-white px-4 py-3 flex items-center">
        <button onClick={() => navigate('/')} className="p-1.5 mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l7-7m-7 7l7 7" />
          </svg>
        </button>
        <h1 className="font-bold text-base">Kết quả Spelling</h1>
      </div>

      <div className="max-w-md lg:max-w-lg mx-auto px-4 py-8 flex flex-col items-center gap-6 flex-1 w-full">
        {/* Emoji + message */}
        <div className="text-7xl">{feedback?.emoji}</div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{feedback?.title}</h2>
          <p className="text-gray-500 mt-1">{feedback?.msg}</p>
        </div>

        {/* Score circle */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full text-center">
          <div className="text-6xl font-bold text-violet-600 mb-1">{accuracy}%</div>
          <div className="text-gray-400 text-sm mb-6">Đúng ngay lần đầu</div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{firstTryCorrect.length}</div>
              <div className="text-xs text-gray-400 mt-0.5">Đúng lần đầu</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{firstTryWrong.length}</div>
              <div className="text-xs text-gray-400 mt-0.5">Sai lần đầu</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{total}</div>
              <div className="text-xs text-gray-400 mt-0.5">Tổng</div>
            </div>
          </div>
        </div>

        {/* Word lists */}
        <div className="w-full flex flex-col gap-4">
          <WordList
            title="Sai ở lần đầu"
            icon="✗"
            accent="text-red-500"
            items={firstTryWrong}
            onSpeak={speak}
          />
          <WordList
            title="Đúng ngay lần đầu"
            icon="✓"
            accent="text-green-600"
            items={firstTryCorrect}
            onSpeak={speak}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 w-full">
          {firstTryWrong.length > 0 && (
            <button
              onClick={handleRetryWrong}
              className="w-full py-3.5 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors"
            >
              🎯 Luyện lại {firstTryWrong.length} từ đã sai
            </button>
          )}
          <div className="flex gap-3 w-full">
            <button
              onClick={handleRetry}
              className="flex-1 py-3.5 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              🔄 Làm lại tất cả
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3.5 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors"
            >
              🏠 Trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
