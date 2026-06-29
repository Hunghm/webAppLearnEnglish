import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import AddWordModal from '../components/folder/AddWordModal.jsx'
import ModeModal from '../components/category/ModeModal.jsx'
import { getFolder } from '../utils/storage.js'
import { useFolderWords } from '../hooks/useUserFolders.js'

export default function FolderPage() {
  const { folderId } = useParams()
  const navigate = useNavigate()
  const folder = getFolder(folderId)
  const { words, add, remove } = useFolderWords(folderId)

  const [showAddWord, setShowAddWord] = useState(false)
  const [showModeModal, setShowModeModal] = useState(false)

  if (!folder) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Bộ từ" />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Bộ từ không tồn tại.</p>
        </div>
      </div>
    )
  }

  const handleDelete = (word) => {
    if (window.confirm(`Xóa từ "${word}"?`)) remove(word)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={`${folder.emoji} ${folder.name}`}
        subtitle={`${words.length} từ`}
        rightAction={
          <button
            onClick={() => setShowAddWord(true)}
            className="bg-white/20 text-white rounded-full px-3 py-1 text-sm font-medium hover:bg-white/30 transition-colors"
          >
            + Thêm
          </button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 pb-32">
        {words.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-gray-500">Chưa có từ nào</p>
            <button
              onClick={() => setShowAddWord(true)}
              className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium"
            >
              Thêm từ đầu tiên
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {words.map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 text-sm">{w.word}</div>
                  {w.wordType && (
                    <div className="text-xs text-gray-400">{w.wordType}</div>
                  )}
                  <div className="text-sm text-gray-600 mt-0.5">{w.definition}</div>
                </div>
                <button
                  onClick={() => handleDelete(w.word)}
                  className="p-1.5 text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
                  aria-label="Xóa từ"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Study button */}
      {words.length >= 1 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-4">
            <button
              onClick={() => setShowModeModal(true)}
              className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              🎓 Học ngay
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {showAddWord && (
        <AddWordModal
          existingWords={words}
          onClose={() => setShowAddWord(false)}
          onAdd={add}
        />
      )}

      {showModeModal && (
        <ModeModal
          studySet={{ name: folder.name, emoji: folder.emoji }}
          isFolder
          folderWords={words}
          onClose={() => setShowModeModal(false)}
        />
      )}
    </div>
  )
}
