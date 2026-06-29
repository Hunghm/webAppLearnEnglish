import { useState } from 'react'

const EMOJIS = ['📁', '📚', '🎯', '🔖', '⭐', '🏆', '🌟', '📝', '💡', '🔥']

export default function CreateFolderModal({ onClose, onCreate }) {
  const [name, setName] = useState('')
  const [emojiIdx, setEmojiIdx] = useState(0)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (!trimmed) { setError('Vui lòng nhập tên folder'); return }
    onCreate(trimmed, EMOJIS[emojiIdx])
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={onClose}>
      <div
        className="bg-white rounded-t-2xl w-full max-w-lg mx-auto p-6 pb-8"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-gray-800 mb-4">Tạo bộ từ mới</h2>

        {/* Emoji picker */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {EMOJIS.map((emoji, i) => (
            <button
              key={i}
              onClick={() => setEmojiIdx(i)}
              className={`w-10 h-10 text-xl rounded-lg transition-all ${
                emojiIdx === i ? 'bg-blue-100 ring-2 ring-blue-400' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Name input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Tên bộ từ</label>
          <input
            type="text"
            value={name}
            onChange={e => { setName(e.target.value); setError('') }}
            placeholder="Ví dụ: Từ vựng IELTS..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoFocus
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Tạo
          </button>
        </div>
      </div>
    </div>
  )
}
