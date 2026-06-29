export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="max-w-lg mx-auto flex">
        <button
          onClick={() => onTabChange('vocab')}
          className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
            activeTab === 'vocab'
              ? 'text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">📖</span>
          <span>Từ vựng</span>
        </button>
        <button
          onClick={() => onTabChange('grammar')}
          className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
            activeTab === 'grammar'
              ? 'text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">📝</span>
          <span>Ngữ pháp</span>
        </button>
        <button
          onClick={() => onTabChange('exercises')}
          className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
            activeTab === 'exercises'
              ? 'text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">✏️</span>
          <span>Bài tập</span>
        </button>
        <button
          onClick={() => onTabChange('destination')}
          className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
            activeTab === 'destination'
              ? 'text-indigo-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">🏆</span>
          <span>Destination</span>
        </button>
      </div>
    </div>
  )
}
