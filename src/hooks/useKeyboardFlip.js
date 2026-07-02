// hooks/useKeyboardFlip.js (viết lại)
import { useKeyboard } from './useKeyboard'

export function useKeyboardFlip(callback, options = {}) {
    const {
        key = 'Space',
        ...restOptions
    } = options

    return useKeyboard(key, callback, restOptions)
}