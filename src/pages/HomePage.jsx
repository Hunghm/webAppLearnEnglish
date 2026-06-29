import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BottomNav from '../components/layout/BottomNav.jsx'
import ReviewBanner from '../components/home/ReviewBanner.jsx'
import UnitCard from '../components/home/UnitCard.jsx'
import UserFolderCard from '../components/home/UserFolderCard.jsx'
import CreateFolderModal from '../components/home/CreateFolderModal.jsx'
import { UNITS } from '../data/units.js'
import { GRAMMAR_LESSONS } from '../data/grammar.js'
import { useUserFolders } from '../hooks/useUserFolders.js'

export default function HomePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(() => searchParams.get('tab') || 'vocab')
  const [showCreateFolder, setShowCreateFolder] = useState(false)
  const { folders, createFolder, removeFolder } = useUserFolders()
  

  const handleTabChange = (tab) => {
    if (tab === 'exercises') { navigate('/exercises'); return }
    if (tab === 'destination') { navigate('/destination'); return }
    setActiveTab(tab)
  }

  const handleDeleteFolder = (id) => {
    if (window.confirm('Xóa bộ từ này?')) removeFolder(id)
  }

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">

      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 shadow-sm z-20">
        <div className="bg-blue-600 text-white px-6 py-5 flex-shrink-0">
          <h1 className="text-xl font-bold">📚 QuizzLearning</h1>
          <p className="text-blue-200 text-sm mt-0.5">Học tiếng Anh hiệu quả</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
              activeTab === 'vocab'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-xl">📖</span>
            <span>Từ vựng</span>
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
              activeTab === 'grammar'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
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
            onClick={() => navigate('/destination')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-left"
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
        <div className="lg:hidden bg-blue-600 text-white px-4 pt-4 pb-6">
          <h1 className="text-xl font-bold">📚 QuizzLearning</h1>
          <p className="text-blue-200 text-sm mt-0.5">Học tiếng Anh hiệu quả</p>
        </div>

        {/* Desktop page title bar */}
        <div className="hidden lg:flex items-center bg-white border-b border-gray-200 px-8 py-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800">
            {activeTab === 'vocab' ? '📖 Từ vựng' : '📝 Ngữ pháp'}
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 pb-24 lg:pb-10 pt-0">

          {activeTab === 'vocab' ? (
            <>
              {/* Review Banner */}
              <div className="mt-4 mb-4">
                <ReviewBanner />
              </div>

              {/* Units section */}
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-700 mb-3">Đơn vị học</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                  {UNITS.map(unit => (
                    <UnitCard key={unit.id} unit={unit} />
                  ))}
                </div>
              </div>

              {/* User Folders section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-bold text-gray-700">Bộ từ của tôi</h2>
                  <button
                    onClick={() => setShowCreateFolder(true)}
                    className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-blue-700 transition-colors"
                    aria-label="Tạo bộ từ mới"
                  >
                    +
                  </button>
                </div>
                {folders.length === 0 ? (
                  <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                    <div className="text-4xl mb-2">📂</div>
                    <p className="text-gray-500 text-sm">Chưa có bộ từ nào</p>
                    <p className="text-gray-400 text-xs mt-1">Nhấn + để tạo bộ từ đầu tiên</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {folders.map(folder => (
                      <UserFolderCard
                        key={folder.id}
                        folder={folder}
                        onDelete={handleDeleteFolder}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Grammar tab */
            <div className="mt-4">
              <h2 className="lg:hidden text-base font-bold text-gray-700 mb-3">Ngữ pháp</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {GRAMMAR_LESSONS.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(`/grammar/${index}`)}
                    className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center font-bold text-green-700 text-sm flex-shrink-0">
                      {lesson.unit}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-sm truncate">{lesson.titleEn || lesson.title}</div>
                      <div className="text-xs text-gray-400 truncate">{lesson.title}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Create Folder Modal */}
      {showCreateFolder && (
        <CreateFolderModal
          onClose={() => setShowCreateFolder(false)}
          onCreate={(name, emoji) => createFolder(name, emoji)}
        />
      )}
    </div>
  )
}
