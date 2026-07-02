import { useState, useEffect, useRef, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import { useTTS } from '../hooks/useTTS.js'
import { shuffle } from '../utils/helpers.js'

export default function SpellingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { speak } = useTTS()
  const inputRef = useRef(null)

  const { unitId, source, words: stateWords, studySetName } = location.state || {}

  const words = useMemo(() => {
    if (!stateWords || stateWords.length === 0) return []
    return shuffle([...stateWords]).slice(0, 30)
  }, [])

  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState(null) // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0)

  const current = words[index]

  // Get word and definition based on word format
  const getWord = (w) => w.word
  const getDef = (w) => w.def || w.definition || ''
  const getType = (w) => w.typeFull || w.wordType || ''

  useEffect(() => {
    if (current) {
      setInput('')
      setStatus(null)
      inputRef.current?.focus()
    }
  }, [index])
  // THÊM MỚI: focus lại input mỗi khi nó xuất hiện trở lại (status về null)
  useEffect(() => {
    if (!status) {
      inputRef.current?.focus()
    }
  }, [status])

  // Lắng nghe Enter trên toàn trang
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  if (words.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Spelling" />
        <div className="flex flex-col items-center justify-center h-64 gap-4 px-4">
          <p className="text-gray-500">Không có dữ liệu để luyện tập.</p>
          <button onClick={() => navigate(-1)} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium">
            Quay lại
          </button>
        </div>
      </div>
    )
  }

  const letterHint = getWord(current).split('').map((c, i) => {
    if (c === ' ') return ' '
    if (status === 'correct' || status === 'wrong') return c
    return '_'
  }).join(' ')

  const handleSubmit = () => {
    if (status) {
      // Move to next
      if (index + 1 >= words.length) {
        navigate('/result', {
          state: {
            score,
            total: words.length,
            mode: 'spelling',
            unitId,
            source,
            words: stateWords,
            studySetName,
          }
        })
      } else {
        setIndex(i => i + 1)
      }
      return
    }

    const trimmed = input.trim()
    if (!trimmed) return

    const isCorrect = trimmed.toLowerCase() === getWord(current).toLowerCase()
    if (isCorrect) {
      setScore(s => s + 1)
      setStatus('correct')
    } else {
      setStatus('wrong')
      speak(getWord(current))
    }
  }

  const progress = ((index + 1) / words.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={studySetName || 'Spelling'}
        subtitle={`${index + 1} / ${words.length}`}
      />

      <div className="h-1.5 bg-gray-200">
        <div className="h-1.5 bg-violet-500 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-xl mx-auto px-4 py-6">
        {/* Word type & Definition */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {getType(current)}
            </span>
          </div>
          <div className="text-xl font-bold text-gray-800 text-center">{getDef(current)}</div>
        </div>

        {/* Letter hint */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-2">Gợi ý</p>
          <div className="text-2xl font-mono tracking-widest text-gray-700">
            {status ? getWord(current) : letterHint}
          </div>
          {status === 'wrong' && (
            <div className="mt-2 text-sm text-red-600">
              Đáp án đúng: <span className="font-bold">{getWord(current)}</span>
            </div>
          )}
          {status === 'correct' && (
            <div className="mt-2 text-sm text-green-600 font-medium">✓ Chính xác!</div>
          )}
        </div>

        {/* Input */}
        {!status && (
          <div className="mb-4">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              // onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Nhập từ tiếng Anh..."
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-base text-center focus:outline-none focus:border-violet-500 transition-colors"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        )}

        <button
          onClick={handleSubmit}
          className={`w-full py-3.5 rounded-xl font-semibold transition-colors ${status
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-violet-600 text-white hover:bg-violet-700'
            }`}
        >
          {status
            ? (index + 1 >= words.length ? 'Xem kết quả' : 'Tiếp theo →')
            : 'Kiểm tra'}
        </button>
      </div>
    </div>
  )
}
