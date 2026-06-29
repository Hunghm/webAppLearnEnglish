import { useLocation, useNavigate } from 'react-router-dom'

const FEEDBACK = [
  { min: 90, emoji: '🎉', title: 'Xuất sắc!', msg: 'Bạn thật tuyệt vời!' },
  { min: 70, emoji: '👍', title: 'Tốt lắm!', msg: 'Tiếp tục phát huy nhé!' },
  { min: 50, emoji: '😊', title: 'Khá ổn!', msg: 'Luyện tập thêm một chút nữa!' },
  { min: 0,  emoji: '💪', title: 'Cố gắng thêm!', msg: 'Đừng nản, ôn lại và thử lần nữa!' },
]

export default function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const { score = 0, total = 0, mode, unitId, source, words, studySetName } = location.state || {}
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0

  const feedback = FEEDBACK.find(f => accuracy >= f.min)

  const handleRetry = () => {
    navigate(`/${mode}`, {
      state: { unitId, source, words, studySetName }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center">
        <button onClick={() => navigate('/')} className="p-1.5 mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l7-7m-7 7l7 7" />
          </svg>
        </button>
        <h1 className="font-bold text-base">Kết quả</h1>
      </div>

      <div className="max-w-md lg:max-w-lg mx-auto px-4 py-8 flex flex-col items-center gap-6 flex-1">
        {/* Emoji + message */}
        <div className="text-7xl">{feedback?.emoji}</div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{feedback?.title}</h2>
          <p className="text-gray-500 mt-1">{feedback?.msg}</p>
        </div>

        {/* Score circle */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full text-center">
          <div className="text-6xl font-bold text-blue-600 mb-1">{accuracy}%</div>
          <div className="text-gray-400 text-sm mb-6">Độ chính xác</div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-xs text-gray-400 mt-0.5">Đúng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{total - score}</div>
              <div className="text-xs text-gray-400 mt-0.5">Sai</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{total}</div>
              <div className="text-xs text-gray-400 mt-0.5">Tổng</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 w-full">
          <button
            onClick={handleRetry}
            className="flex-1 py-3.5 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
          >
            🔄 Thử lại
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            🏠 Trang chủ
          </button>
        </div>
      </div>
    </div>
  )
}
