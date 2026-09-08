import { useState, useEffect, useRef, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import { useTTS } from '../hooks/useTTS.js'
import { shuffle } from '../utils/helpers.js'

// Tìm từ vựng (kể cả dạng biến đổi đuôi) trong câu ví dụ để khoét trống
const buildClozeRegex = (word) => {
  const esc = word.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`\\b${esc}(?:s|es|ed|ing|d|ies)?\\b`, 'i')
}

export default function SpellingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { speak } = useTTS()
  const inputRef = useRef(null)

  const { unitId, source, words: stateWords, studySetName } = location.state || {}

  // Get word and definition based on word format
  const getWord = (w) => w.word
  const getDef = (w) => w.def || w.definition || ''
  const getType = (w) => w.typeFull || w.wordType || ''

  const initialWords = useMemo(() => {
    if (!stateWords || stateWords.length === 0) return []
    return shuffle([...stateWords]).slice(0, 30)
  }, [])

  const total = initialWords.length

  // Hàng đợi động: từ nào làm sai sẽ bị đẩy xuống cuối để làm lại,
  // từ nào làm đúng sẽ được lấy ra khỏi hàng đợi. Học tới khi hết hàng đợi.
  const [queue, setQueue] = useState(() => initialWords)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState('') // từ người dùng vừa gõ (để đối chiếu khi sai)
  const [status, setStatus] = useState(null) // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0) // số từ làm đúng ngay lần đầu
  const wrongSetRef = useRef(new Set()) // các từ đã từng làm sai
  const firstTryCorrectRef = useRef([]) // các từ đúng ngay lần đầu
  const firstTryWrongRef = useRef([]) // các từ sai ở lần đầu

  const current = queue[0]
  const done = total - queue.length

  // Reset input/status + focus mỗi khi chuyển sang từ mới trong hàng đợi
  useEffect(() => {
    setInput('')
    setStatus(null)
    inputRef.current?.focus()
  }, [queue])

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

  if (total === 0) {
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

  const letterHint = getWord(current).split('').map((c) => {
    if (c === ' ') return ' '
    if (status === 'correct' || status === 'wrong') return c
    return '_'
  }).join(' ')

  // Câu ví dụ với chỗ trống ở vị trí từ vựng
  const exampleText = (current.example || current.ex || '').trim()
  const clozeMatch = exampleText ? exampleText.match(buildClozeRegex(getWord(current))) : null

  const renderCloze = () => {
    if (!clozeMatch) return null
    const start = clozeMatch.index
    const end = start + clozeMatch[0].length
    const before = exampleText.slice(0, start)
    const after = exampleText.slice(end)
    const blankLen = Math.max(5, clozeMatch[0].length)
    return (
      <p className="text-lg text-gray-700 text-center leading-relaxed">
        {before}
        <span
          className={`font-bold ${
            status === 'correct'
              ? 'text-green-600'
              : status === 'wrong'
                ? 'text-red-600'
                : 'text-violet-600 tracking-widest'
          }`}
        >
          {status ? clozeMatch[0] : '_'.repeat(blankLen)}
        </span>
        {after}
      </p>
    )
  }

  // Đối chiếu từng ký tự người dùng gõ với đáp án đúng để tô đỏ chỗ sai
  const typedDiff = submitted.split('').map((ch, i) => {
    const expected = getWord(current)[i]
    const ok = expected != null && ch.toLowerCase() === expected.toLowerCase()
    return (
      <span key={i} className={ok ? 'text-gray-700' : 'bg-red-200 text-red-700 rounded'}>
        {ch === ' ' ? ' ' : ch}
      </span>
    )
  })

  const finish = () => {
    navigate('/spelling-result', {
      state: {
        score,
        total,
        mode: 'spelling',
        unitId,
        source,
        words: stateWords,
        studySetName,
        firstTryCorrect: firstTryCorrectRef.current,
        firstTryWrong: firstTryWrongRef.current,
      }
    })
  }

  const handleSubmit = () => {
    if (status) {
      // Chuyển sang từ tiếp theo
      if (status === 'correct') {
        // Làm đúng: bỏ từ này ra khỏi hàng đợi
        const nextQueue = queue.slice(1)
        if (nextQueue.length === 0) {
          finish()
        } else {
          setQueue(nextQueue)
        }
      } else {
        // Làm sai: đẩy từ này xuống cuối hàng đợi để làm lại
        setQueue([...queue.slice(1), queue[0]])
      }
      return
    }

    const trimmed = input.trim()
    if (!trimmed) return

    setSubmitted(trimmed)
    const key = getWord(current).toLowerCase()
    const isCorrect = trimmed.toLowerCase() === key
    const firstAttempt = !wrongSetRef.current.has(key)

    // Luôn phát âm từ vựng sau khi kiểm tra (cả đúng lẫn sai)
    speak(getWord(current))

    if (isCorrect) {
      if (firstAttempt) {
        setScore(s => s + 1)
        firstTryCorrectRef.current.push(current)
      }
      setStatus('correct')
    } else {
      if (firstAttempt) {
        firstTryWrongRef.current.push(current)
      }
      wrongSetRef.current.add(key)
      setStatus('wrong')
    }
  }

  const progress = (done / total) * 100
  const remaining = queue.length

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={studySetName || 'Spelling'}
        subtitle={`${done} / ${total} · còn lại ${remaining}`}
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
          {clozeMatch && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center mb-1">Điền từ vào chỗ trống</p>
              {renderCloze()}
            </div>
          )}
        </div>

        {/* Letter hint */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-2">Gợi ý</p>
          <div className="text-2xl font-mono tracking-widest text-gray-700">
            {status ? getWord(current) : letterHint}
          </div>
          {status === 'wrong' && (
            <div className="mt-2 text-sm">
              <div className="text-gray-500">
                Bạn đã gõ:{' '}
                <span className="font-mono font-semibold tracking-wide line-through decoration-red-400/60">
                  {typedDiff}
                </span>
              </div>
              <div className="text-red-600 mt-1">
                Đáp án đúng: <span className="font-bold">{getWord(current)}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Từ này sẽ được hỏi lại ở cuối danh sách</div>
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
            ? (status === 'correct' && queue.length === 1 ? 'Xem kết quả' : 'Tiếp theo →')
            : 'Kiểm tra'}
        </button>
      </div>
    </div>
  )
}
