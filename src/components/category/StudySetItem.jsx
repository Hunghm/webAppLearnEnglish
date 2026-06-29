export default function StudySetItem({ studySet, onClick }) {
  return (
    <button
      onClick={() => {
        onClick(studySet)
      }}
      className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md active:scale-98 transition-all text-left border border-gray-100"
    >
      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
        {studySet.emoji}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-800 text-sm">{studySet.name}</div>
        <div className="text-xs text-gray-400">{studySet.count} từ</div>
      </div>
      <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}
