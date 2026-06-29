import { useState, useEffect, useRef, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import { buildQuestions, buildQuestionsFromFolder } from '../data/quizData.js'
import { useTTS } from '../hooks/useTTS.js'

export default function QuizPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { speak } = useTTS()

  const { unitId, source, words: stateWords, studySetName } = location.state || {}

  const questions = useMemo(() => {
    if (!stateWords || stateWords.length === 0) return []
    if (stateWords[0]?.definition) return buildQuestionsFromFolder(stateWords)
    return buildQuestions(stateWords, unitId)
  }, [])

  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const scoreRef = useRef(0) // Use ref for immediate access

  const current = questions[qIndex]

  useEffect(() => {
    if (current) speak(current.word)
  }, [qIndex])

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Quiz" />
        <div className="flex flex-col items-center justify-center h-64 gap-4 px-4">
          <p className="text-gray-500">Không đủ dữ liệu để tạo quiz.</p>
          <button onClick={() => navigate(-1)} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium">
            Quay lại
          </button>
        </div>
      </div>
    )
  }

  const handleSelect = (option) => {
    if (selected) return
    setSelected(option)
    if (option === current.correctAnswer) scoreRef.current += 1
  }

  const handleNext = () => {
    const isLast = qIndex + 1 >= questions.length
    if (isLast) {
      navigate('/result', {
        state: {
          score: scoreRef.current,
          total: questions.length,
          mode: 'quiz',
          unitId,
          source,
          words: stateWords,
          studySetName,
        }
      })
    } else {
      setQIndex(i => i + 1)
      setSelected(null)
    }
  }

  const progress = ((qIndex + 1) / questions.length) * 100

  const getOptionClass = (option) => {
    if (!selected) return 'bg-white border-gray-200 text-gray-800 hover:border-blue-400 hover:bg-blue-50'
    if (option === current.correctAnswer) return 'bg-green-100 border-green-500 text-green-800'
    if (option === selected && option !== current.correctAnswer) return 'bg-red-100 border-red-400 text-red-800'
    return 'bg-gray-50 border-gray-200 text-gray-400'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={studySetName || 'Quiz'}
        subtitle={`Câu ${qIndex + 1} / ${questions.length}`}
        rightAction={
          <button onClick={() => speak(current.word)} className="p-1.5">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
          </button>
        }
      />

      {/* Progress */}
      <div className="h-1.5 bg-gray-200">
        <div className="h-1.5 bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Question */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
          <div className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full inline-block mb-3">
            {current.wordType}
          </div>
          <div className="text-2xl font-bold text-gray-800">{current.word}</div>
          <p className="text-sm text-gray-500 mt-2">Chọn nghĩa đúng</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {current.allOptions.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              className={`w-full py-4 px-4 rounded-xl border-2 text-sm font-medium transition-all text-left ${getOptionClass(option)}`}
            >
              <span className="font-bold mr-2 text-gray-400">{['A', 'B', 'C', 'D'][i]}.</span>
              {option}
            </button>
          ))}
        </div>

        {/* Next button */}
        {selected && (
          <button
            onClick={handleNext}
            className="w-full mt-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {qIndex + 1 >= questions.length ? 'Xem kết quả' : 'Câu tiếp theo →'}
          </button>
        )}
      </div>
    </div>
  )
}
