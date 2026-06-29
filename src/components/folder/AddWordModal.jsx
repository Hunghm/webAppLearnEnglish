import { useState } from 'react'

export default function AddWordModal({ onClose, onAdd, existingWords }) {
  const [word, setWord] = useState('')
  const [wordType, setWordType] = useState('')
  const [definition, setDefinition] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const w = word.trim()
    const d = definition.trim()
    if (!w) { setError('Vui lòng nhập từ'); return }
    if (!d) { setError('Vui lòng nhập nghĩa'); return }

    const isDuplicate = existingWords.some(
      ew => ew.word.toLowerCase() === w.toLowerCase()
    )
    if (isDuplicate) { setError('Từ này đã có trong bộ từ'); return }

    onAdd({ word: w, wordType: wordType.trim(), definition: d })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={onClose}>
      <div
        className="bg-white rounded-t-2xl w-full max-w-lg mx-auto p-6 pb-8"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-gray-800 mb-4">Thêm từ mới</h2>

        <div className="flex flex-col gap-3 mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Từ tiếng Anh *</label>
            <input
              type="text"
              value={word}
              onChange={e => { setWord(e.target.value); setError('') }}
              placeholder="Ví dụ: perseverance"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Loại từ (tùy chọn)</label>
            <input
              type="text"
              value={wordType}
              onChange={e => setWordType(e.target.value)}
              placeholder="Ví dụ: noun, verb, adjective..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Nghĩa tiếng Việt *</label>
            <input
              type="text"
              value={definition}
              onChange={e => { setDefinition(e.target.value); setError('') }}
              placeholder="Ví dụ: Sự kiên trì, bền bỉ"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium">
            Hủy
          </button>
          <button onClick={handleSubmit} className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
            Thêm
          </button>
        </div>
      </div>
    </div>
  )
}
