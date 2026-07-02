import { useState, useRef, useEffect } from 'react'

export default function LoginPage() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!password.trim() || loading) return

        setError('')
        setLoading(true)

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            })
            
            if (res.ok) {
                // Reload trang thật (không dùng React Router navigate) để
                // trình duyệt gửi lại cookie mới nhận, middleware kiểm tra lại từ đầu
                window.location.href = '/'
            } else {
                setError('Sai mật khẩu, vui lòng thử lại.')
                setPassword('')
                inputRef.current?.focus()
            }
        } catch (err) {
            setError('Có lỗi xảy ra, vui lòng thử lại sau.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                {/* Logo / Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-violet-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                    <h1 className="text-xl font-bold text-gray-800 text-center mb-1">
                        Khu vực riêng tư
                    </h1>
                    <p className="text-sm text-gray-400 text-center mb-6">
                        Nhập mật khẩu để tiếp tục
                    </p>

                    <input
                        ref={inputRef}
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            if (error) setError('')
                        }}
                        placeholder="Mật khẩu..."
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        disabled={loading}
                        className={`w-full border-2 rounded-xl px-4 py-3 text-base text-center focus:outline-none transition-colors mb-4 disabled:opacity-50 ${error
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-300 focus:border-violet-500'
                            }`}
                    />

                    {error && (
                        <p className="text-sm text-red-600 text-center mb-4 -mt-2">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !password.trim()}
                        className="w-full py-3.5 rounded-xl font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Đang kiểm tra...' : 'Vào trang'}
                    </button>
                </form>
            </div>
        </div>
    )
}