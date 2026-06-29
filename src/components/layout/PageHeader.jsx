import { useNavigate } from 'react-router-dom'

export default function PageHeader({ title, subtitle, onBack, rightAction }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) onBack()
    // else navigate(-1)
    else navigate('/')
  }

  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <button
          onClick={handleBack}
          className="p-1.5 rounded-full hover:bg-blue-500 transition-colors flex-shrink-0"
          aria-label="Quay lại"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-base leading-tight truncate">{title}</h1>
          {subtitle && (
            <p className="text-blue-200 text-xs truncate">{subtitle}</p>
          )}
        </div>
        {rightAction && (
          <div className="flex-shrink-0">{rightAction}</div>
        )}
      </div>
    </div>
  )
}
