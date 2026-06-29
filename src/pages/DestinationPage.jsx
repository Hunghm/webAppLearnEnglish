import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/layout/BottomNav.jsx'

const LEVELS = [
  {
    id: 'b1',
    label: 'B1',
    title: 'Intermediate',
    subtitle: 'Trung cấp',
    description: 'Giao tiếp hàng ngày, du lịch, công việc cơ bản',
    emoji: '🎯',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
    available: false,
  },
  {
    id: 'b2',
    label: 'B2',
    title: 'Upper-Intermediate',
    subtitle: 'Trung cao cấp',
    description: 'Thảo luận chuyên sâu, đọc hiểu phức tạp, viết học thuật',
    emoji: '🚀',
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-700',
    available: true,
  },
  {
    id: 'c1c2',
    label: 'C1/C2',
    title: 'Advanced / Mastery',
    subtitle: 'Cao cấp / Thành thạo',
    description: 'Tiếng Anh học thuật, chuyên nghiệp, gần như bản ngữ',
    emoji: '👑',
    color: 'from-purple-600 to-violet-600',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-700',
    available: true,
  },
]

export default function DestinationPage() {
  const navigate = useNavigate()

  const handleSelect = (level) => {
    if (!level.available) return
    navigate(`/destination/${level.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">

      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 shadow-sm z-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-5 flex-shrink-0">
          <h1 className="text-xl font-bold">📚 QuizzLearning</h1>
          <p className="text-blue-200 text-sm mt-0.5">Học tiếng Anh hiệu quả</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-xl">📖</span>
            <span>Từ vựng</span>
          </button>
          <button
            onClick={() => navigate('/?tab=grammar')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-xl">📝</span>
            <span>Ngữ pháp</span>
          </button>
          <button
            onClick={() => navigate('/exercises')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-xl">✏️</span>
            <span>Bài tập</span>
          </button>
          <button
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-indigo-50 text-indigo-600 transition-colors text-left"
          >
            <span className="text-xl">🏆</span>
            <span>Destination</span>
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <p className="text-xs text-gray-400 text-center">QuizzLearning v1.0</p>
        </div>
      </aside>

      {/* ── Main area ── */}
      <div className="lg:ml-64 flex-1 min-w-0 flex flex-col">

        {/* Mobile header */}
        <div className="lg:hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 pt-4 pb-8">
          <h1 className="text-xl font-bold">🏆 Destination</h1>
          <p className="text-blue-200 text-sm mt-0.5">Chọn trình độ mục tiêu của bạn</p>
        </div>

        {/* Desktop title */}
        <div className="hidden lg:flex items-center bg-white border-b border-gray-200 px-8 py-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800">🏆 Destination</h2>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto w-full px-4 lg:px-8 pb-24 lg:pb-10 pt-6">

          <p className="text-gray-500 text-sm mb-6 text-center">
            Chọn trình độ CEFR phù hợp với mục tiêu học tập của bạn
          </p>

          <div className="flex flex-col gap-4">
            {LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => handleSelect(level)}
                disabled={!level.available}
                className={`relative w-full rounded-2xl border-2 p-5 text-left transition-all active:scale-98
                  ${level.available
                    ? `${level.borderColor} bg-white hover:shadow-lg hover:-translate-y-0.5 cursor-pointer`
                    : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-70'
                  }`}
              >
                {/* Coming soon badge */}
                {!level.available && (
                  <div className="absolute top-4 right-4 bg-gray-200 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Sắp ra mắt
                  </div>
                )}

                {/* Active badge */}
                {level.available && (
                  <div className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${level.badgeColor}`}>
                    Có sẵn
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Level badge */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex flex-col items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-white font-black text-lg leading-none">{level.label}</span>
                    <span className="text-white/80 text-xs mt-0.5">{level.emoji}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className={`text-base font-bold ${level.available ? level.textColor : 'text-gray-400'}`}>
                        {level.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{level.subtitle}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{level.description}</p>
                  </div>

                  {/* Arrow */}
                  {level.available && (
                    <svg className={`w-5 h-5 flex-shrink-0 ${level.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Info note */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-xs text-blue-600 text-center leading-relaxed">
              📌 Nội dung được biên soạn theo khung tham chiếu châu Âu (CEFR).
              <br />B1 sẽ ra mắt trong thời gian tới.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <BottomNav activeTab="destination" onTabChange={(tab) => {
        if (tab === 'vocab') navigate('/')
        else if (tab === 'grammar') navigate('/?tab=grammar')
        else if (tab === 'exercises') navigate('/exercises')
      }} />
    </div>
  )
}
