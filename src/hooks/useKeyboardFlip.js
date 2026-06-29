// hooks/useKeyboardFlip.js
import { useEffect } from 'react'

export function useKeyboardFlip(flipCallback, options = {}) {
    const {
        enabled = true,           // Bật/tắt hook
        key = 'Space',            // Phím mặc định là Space
        preventDefault = true,    // Ngăn scroll
        checkFocus = true,        // Kiểm tra focus input
        checkDrag = false,        // Kiểm tra đang drag
        isDragging = false,       // Trạng thái drag
        isAnimating = false,      // Trạng thái animation
    } = options

    useEffect(() => {
        if (!enabled) return

        const handleKeyDown = (e) => {
            // Kiểm tra phím
            const isSpaceKey = e.key === ' ' || e.key === 'Space' || e.code === 'Space'
            if (!isSpaceKey) return

            // Kiểm tra focus input
            if (checkFocus) {
                const isInputFocused = e.target.tagName === 'INPUT' ||
                    e.target.tagName === 'TEXTAREA' ||
                    e.target.isContentEditable
                if (isInputFocused) return
            }

            // Kiểm tra đang drag
            if (checkDrag && isDragging) return

            // Kiểm tra đang animation
            if (checkDrag && isAnimating) return

            // Ngăn scroll
            if (preventDefault) {
                e.preventDefault()
            }

            // Gọi callback để lật thẻ
            flipCallback()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [enabled, flipCallback, isDragging, isAnimating, checkDrag, checkFocus, preventDefault])
}