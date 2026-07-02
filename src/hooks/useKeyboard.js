// hooks/useKeyboard.js
import { useEffect } from 'react'

export function useKeyboard(key, callback, options = {}) {
    const {
        enabled = true,
        preventDefault = true,
        checkFocus = true,
        checkDrag = false,
        isDragging = false,
        isAnimating = false,
    } = options

    useEffect(() => {
        if (!enabled) return

        const handleKeyDown = (e) => {
            // Kiểm tra phím (hỗ trợ nhiều định dạng)
            const keyMatch = typeof key === 'string'
                ? e.key === key || e.key === key.toLowerCase() || e.code === key
                : key.includes(e.key) || key.includes(e.code)

            if (!keyMatch) return

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
            if (isAnimating) return

            // Ngăn scroll
            if (preventDefault) {
                e.preventDefault()
            }

            callback()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [enabled, key, callback, isDragging, isAnimating, checkDrag, checkFocus, preventDefault])
}