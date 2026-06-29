import { useNavigate } from 'react-router-dom'
import { getWords } from '../../utils/storage.js'

export default function UserFolderCard({ folder, onDelete }) {
  const navigate = useNavigate()
  const wordCount = getWords(folder.id).length

  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100">
      <button
        onClick={() => navigate(`/folder/${folder.id}`)}
        className="flex items-center gap-3 flex-1 text-left"
      >
        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
          {folder.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-800 text-sm truncate">{folder.name}</div>
          <div className="text-xs text-gray-400">{wordCount} từ</div>
        </div>
      </button>
      <button
        onClick={() => onDelete(folder.id)}
        className="p-1.5 text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
        aria-label="Xóa folder"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}
