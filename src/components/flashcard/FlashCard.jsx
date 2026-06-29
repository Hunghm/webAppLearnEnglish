import { useState, useRef } from 'react'
import { useTTS } from '../../hooks/useTTS.js'
import { useKeyboardFlip } from '../../hooks/useKeyboardFlip.js'

export default function FlashCard({ card, onSwipeLeft, onSwipeRight, showControls = true }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [flyDir, setFlyDir] = useState(null)
  const startXRef = useRef(null)
  const isDraggingRef = useRef(false)   // ref tránh stale closure
  const { speak } = useTTS()

  const SWIPE_THRESHOLD = 80

  const flipCard = () => {
    setIsFlipped(f => !f)
  }

  useKeyboardFlip(flipCard, {
    enabled: true,
    checkDrag: true,
    isDragging: isDragging,
    isAnimating: !!flyDir,
  })

  const handlePointerDown = (e) => {
    startXRef.current = e.clientX
    isDraggingRef.current = false
    setIsDragging(false)
    try { e.currentTarget.setPointerCapture(e.pointerId) } catch (_) { }
  }

  const handlePointerCancel = () => {
    // Pointer bị huỷ (ví dụ: browser lấy lại quyền scroll) → reset
    startXRef.current = null
    isDraggingRef.current = false
    setIsDragging(false)
    setDragX(0)
  }

  const handlePointerMove = (e) => {
    if (startXRef.current === null) return
    const dx = e.clientX - startXRef.current
    if (Math.abs(dx) > 8) {
      isDraggingRef.current = true
      setIsDragging(true)
    }
    setDragX(dx)
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) {
      // Tap → lật thẻ
      setIsFlipped(f => !f)
      startXRef.current = null
      setDragX(0)
      return
    }

    const dx = dragX
    if (dx > SWIPE_THRESHOLD) {
      setFlyDir('right')
      setTimeout(() => onSwipeRight?.(), 320)
    } else if (dx < -SWIPE_THRESHOLD) {
      setFlyDir('left')
      setTimeout(() => onSwipeLeft?.(), 320)
    } else {
      // Snap về giữa
      setDragX(0)
      setIsDragging(false)
    }

    startXRef.current = null
    isDraggingRef.current = false
  }


  // Tỉ lệ vuốt (0 → 1) để tính độ mờ overlay/stamp
  const swipeRatio = Math.min(Math.abs(dragX) / SWIPE_THRESHOLD, 1)
  const isSwipingRight = isDragging && dragX > 20
  const isSwipingLeft = isDragging && dragX < -20

  const rotation = dragX / 16
  // Giữ transform khi đang drag VÀ khi đang bay để animation bắt đầu từ vị trí drag
  const cardStyle = (isDragging || flyDir)
    ? { transform: `translateX(${dragX}px) rotate(${rotation}deg)`, transition: 'none' }
    : {}

  return (
    <div className="relative select-none">

      {/* ── Stamp BIẾT ── */}
      {isSwipingRight && (
        <div
          className="absolute top-5 left-5 z-30 pointer-events-none"
          style={{ opacity: swipeRatio }}
        >
          <div className="bg-green-500 text-white font-extrabold text-xl px-5 py-2 rounded-2xl border-[3px] border-green-600 shadow-lg rotate-[-12deg]">
            BIẾT ✓
          </div>
        </div>
      )}

      {/* ── Stamp CHƯA BIẾT ── */}
      {isSwipingLeft && (
        <div
          className="absolute top-5 right-5 z-30 pointer-events-none"
          style={{ opacity: swipeRatio }}
        >
          <div className="bg-red-500 text-white font-extrabold text-xl px-5 py-2 rounded-2xl border-[3px] border-red-600 shadow-lg rotate-[12deg]">
            CHƯA ✗
          </div>
        </div>
      )}

      <div className="flashcard-scene relative" style={{ height: card.imageUrl ? 400 : 320 }}>

        {/* ── Overlay màu theo hướng vuốt ── */}
        {isSwipingRight && (
          <div
            className="absolute inset-0 rounded-2xl bg-green-400 z-10 pointer-events-none"
            style={{ opacity: swipeRatio * 0.3 }}
          />
        )}
        {isSwipingLeft && (
          <div
            className="absolute inset-0 rounded-2xl bg-red-400 z-10 pointer-events-none"
            style={{ opacity: swipeRatio * 0.3 }}
          />
        )}

        <div
          className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''} ${flyDir === 'left' ? 'fly-left' : flyDir === 'right' ? 'fly-right' : ''}`}
          style={{ ...cardStyle, touchAction: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {/* Mặt trước */}
          <div className="flashcard-face flashcard-face--front bg-white shadow-lg flex flex-col items-center justify-center gap-3 overflow-hidden">
            {card.imageUrl && !imgError && (
              <img
                src={card.imageUrl}
                alt={card.word}
                onError={() => setImgError(true)}
                className="w-full h-44 object-cover"
                draggable={false}
              />
            )}
            <div className="flex flex-col items-center gap-3 px-6 pb-4">
              <div className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                {card.wordType}
              </div>
              <div className="text-3xl font-bold text-gray-800 text-center">{card.word}</div>
              <button
                onPointerDown={e => e.stopPropagation()}
                onClick={() => speak(card.word)}
                className="mt-1 p-2 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </button>
              <p className="text-xs text-gray-400">Nhấn để lật thẻ</p>
            </div>
          </div>

          {/* Mặt sau */}
          <div className="flashcard-face flashcard-face--back bg-indigo-50 shadow-lg flex flex-col items-center justify-center p-6 gap-3">
            <div className="text-xs text-indigo-400 bg-indigo-100 px-3 py-1 rounded-full">
              {card.wordType}
            </div>
            <div className="text-2xl font-bold text-indigo-900 text-center">
              {card.definition}
            </div>
            {card.example && (
              <p className="text-sm text-indigo-600 text-center italic">"{card.example}"</p>
            )}
            <p className="text-xs text-indigo-300 mt-2">Nhấn để xem mặt trước</p>
          </div>
        </div>
      </div>

      {/* ── Thanh gợi ý vuốt ── */}
      {showControls && (
        <div className="flex justify-between items-center mt-3 px-2">
          <div className={`flex items-center gap-1 text-xs font-medium transition-all ${isSwipingLeft ? 'text-red-500 scale-110' : 'text-red-400'}`}>
            ← Chưa biết
          </div>
          <div className="text-xs text-gray-400">Vuốt để đánh dấu</div>
          <div className={`flex items-center gap-1 text-xs font-medium transition-all ${isSwipingRight ? 'text-green-600 scale-110' : 'text-green-500'}`}>
            Biết →
          </div>
        </div>
      )}
    </div>
  )
}
