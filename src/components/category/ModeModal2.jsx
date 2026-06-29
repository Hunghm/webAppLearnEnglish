import { useNavigate } from 'react-router-dom'
import { getWordsByUnitAndSource } from '../../data/quizData.js'

export default function ModeModal2({ studySet, onClose, isFolder = false, folderWords = [] }) {
  const navigate = useNavigate()

  const getWords = () => {
    if (isFolder) return folderWords
    return getWordsByUnitAndSource(studySet.unitId, studySet.source)
  }

  const launch = (mode) => {
    const words = getWords()
    if (words.length === 0) return
    onClose()
    navigate(`/${mode}`, {
      state: {
        unitId: studySet?.unitId,
        source: studySet?.source,
        words,
        studySetName: studySet?.name || 'Bộ từ cá nhân',
      }
    })
  }
const navigateflashcard = () => {
    const words = getWords()
    if (words.length === 0) return
    onClose()
    navigate(`/flashcard2`, {
      state: {
        unitId: studySet?.unitId,
        source: studySet?.source,
        words,
        studySetName: studySet?.name || 'Bộ từ cá nhân',
        destination: studySet.destination,
      }
    })
  }
  const words = getWords()

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={onClose}>
      <div
        className="bg-white rounded-t-2xl w-full max-w-lg mx-auto p-6 pb-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="text-2xl mb-1">{studySet?.emoji || '📚'}</div>
          <h2 className="text-lg font-bold text-gray-800">{studySet?.name}</h2>
          <p className="text-sm text-gray-400">{words.length} từ</p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigateflashcard()}
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-98 transition-all"
          >
            <span className="text-xl">🃏</span>
            Flashcard
          </button>
          <button
            onClick={() => launch('quiz')}
            disabled={words.length < 4}
            className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-xl">🧠</span>
            Quiz
            {words.length < 4 && <span className="text-xs font-normal">(cần ít nhất 4 từ)</span>}
          </button>
          <button
            onClick={() => launch('spelling')}
            className="w-full py-3.5 bg-violet-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-violet-700 active:scale-98 transition-all"
          >
            <span className="text-xl">✍️</span>
            Spelling
          </button>
        </div>

        <button onClick={onClose} className="w-full mt-3 py-2.5 text-gray-500 text-sm">
          Hủy
        </button>
      </div>
    </div>
  )
}
