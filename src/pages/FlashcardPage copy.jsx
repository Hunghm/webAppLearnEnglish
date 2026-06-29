import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import FlashCard from '../components/flashcard/FlashCard.jsx'
import { useSR } from '../hooks/useSR.js'
import { useTTS } from '../hooks/useTTS.js'
import { buildFlashcards, buildFlashcardsFromFolder } from '../data/quizData.js'
import { getDueWords } from '../utils/sm2.js'
import { ALL_VOCABULARY } from '../data/vocabulary.js'

export default function FlashcardPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { markCorrect, markWrong } = useSR()
  const { speak } = useTTS()

  const { unitId, source, reviewMode, words: stateWords, studySetName } = location.state || {}

  // Build cards
  const cards = (() => {
    if (reviewMode) {
      const dueWordTexts = getDueWords()
      const dueVocab = ALL_VOCABULARY.filter(w => dueWordTexts.includes(w.word))
      return buildFlashcards(dueVocab)
    }
    if (stateWords) {
      // Folder mode - words have { word, wordType, definition }
      if (stateWords[0]?.definition) return buildFlashcardsFromFolder(stateWords)
      return buildFlashcards(stateWords)
    }
    return []
  })()

  const [index, setIndex] = useState(0)
  const [known, setKnown] = useState(0)
  const [unknown, setUnknown] = useState(0)
  const [done, setDone] = useState(false)

  const currentCard = cards[index]

  useEffect(() => {
    if (currentCard) speak(currentCard.word)
  }, [index, currentCard])

  // Keyboard arrow keys (desktop)
  useEffect(() => {
    const handleKey = (e) => {
      if (done || !currentCard) return
      if (e.key === 'ArrowLeft') handleSwipeLeft()
      if (e.key === 'ArrowRight') handleSwipeRight()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [done, currentCard, index])

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Flashcard" />
        <div className="flex flex-col items-center justify-center h-64 gap-4 px-4">
          <div className="text-5xl">😊</div>
          <p className="text-gray-600 text-center">
            {reviewMode ? 'Chưa có từ cần ôn tập hôm nay!' : 'Không có từ nào để học.'}
          </p>
          <button onClick={() => navigate('/')} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium">
            Trang chủ
          </button>
        </div>
      </div>
    )
  }

  if (done) {
    const accuracy = Math.round((known / cards.length) * 100)
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Kết quả" onBack={() => navigate('/')} />
        <div className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
          <div className="text-6xl">
            {accuracy >= 80 ? '🎉' : accuracy >= 50 ? '👍' : '💪'}
          </div>
          <div className="bg-white rounded-2xl p-6 w-full shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-1">{accuracy}%</div>
            <div className="text-gray-500 text-sm">đã biết</div>
            <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{known}</div>
                <div className="text-xs text-gray-400">Biết</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{unknown}</div>
                <div className="text-xs text-gray-400">Chưa biết</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{cards.length}</div>
                <div className="text-xs text-gray-400">Tổng</div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={() => { setIndex(0); setKnown(0); setUnknown(0); setDone(false) }}
              className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium"
            >
              Thử lại
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium"
            >
              Trang chủ
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleSwipeRight = () => {
    markCorrect(currentCard.word)
    setKnown(k => k + 1)
    if (index + 1 >= cards.length) setDone(true)
    else setIndex(i => i + 1)
  }

  const handleSwipeLeft = () => {
    markWrong(currentCard.word)
    setUnknown(u => u + 1)
    if (index + 1 >= cards.length) setDone(true)
    else setIndex(i => i + 1)
  }

  const progress = ((index) / cards.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={reviewMode ? 'Ôn tập' : (studySetName || 'Flashcard')}
        subtitle={`${index + 1} / ${cards.length}`}
        rightAction={
          <button onClick={() => speak(currentCard.word)} className="p-1.5">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
          </button>
        }
      />

      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-xl mx-auto px-4 py-6">
        <FlashCard
          key={index}
          card={currentCard}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />

        {/* Manual buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSwipeLeft}
            className="flex-1 py-3 bg-red-100 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
          >
            <span className="hidden lg:inline text-xs bg-red-200 text-red-500 px-1.5 py-0.5 rounded font-mono">←</span>
            ✗ Chưa biết
          </button>
          <button
            onClick={handleSwipeRight}
            className="flex-1 py-3 bg-green-100 text-green-700 rounded-xl font-semibold text-sm hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
          >
            ✓ Biết rồi
            <span className="hidden lg:inline text-xs bg-green-200 text-green-600 px-1.5 py-0.5 rounded font-mono">→</span>
          </button>
        </div>

        {/* Skip button */}
        <button
          onClick={() => { if (index + 1 >= cards.length) setDone(true); else setIndex(i => i + 1) }}
          className="w-full mt-3 py-2 text-gray-400 text-sm"
        >
          Bỏ qua
        </button>
      </div>
    </div>
  )
}
