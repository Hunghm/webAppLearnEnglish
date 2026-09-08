import { useState } from 'react'

/**
 * Small reusable "Vì sao?" toggle that reveals a short Vietnamese explanation.
 * Used by QuestionItem (per question) and by ExerciseBlock's passage renderers.
 */
export default function ExplanationToggle({ text, className = '' }) {
  const [open, setOpen] = useState(false)
  if (!text) return null
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {open ? 'Ẩn giải thích' : 'Vì sao?'}
      </button>
      {open && (
        <div
          className="mt-1 text-xs leading-relaxed text-gray-700 rounded-lg px-3 py-2"
          style={{ background: '#eef2ff', border: '1px solid #e0e7ff' }}
        >
          {text}
        </div>
      )}
    </div>
  )
}
