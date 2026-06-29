import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function QRGeneratorPage() {
  const [url, setUrl] = useState('')
  const [qrValue, setQrValue] = useState('')
  const [size, setSize] = useState(256)
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const canvasRef = useRef(null)

  const handleGenerate = () => {
    if (url.trim()) setQrValue(url.trim())
  }

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">QR Code Generator</h1>

        {/* URL Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">URL hoặc văn bản</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
          />
        </div>

        {/* Options */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Kích thước</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={size}
              onChange={e => setSize(Number(e.target.value))}
            >
              <option value={128}>128 px</option>
              <option value={256}>256 px</option>
              <option value={512}>512 px</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Màu QR</label>
            <input
              type="color"
              className="h-10 w-16 rounded-lg border border-gray-300 cursor-pointer"
              value={fgColor}
              onChange={e => setFgColor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nền</label>
            <input
              type="color"
              className="h-10 w-16 rounded-lg border border-gray-300 cursor-pointer"
              value={bgColor}
              onChange={e => setBgColor(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!url.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold py-2 rounded-lg transition"
        >
          Tạo QR Code
        </button>

        {/* QR Output */}
        {qrValue && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <div ref={canvasRef} className="p-4 rounded-xl border border-gray-200 shadow-sm">
              <QRCodeCanvas
                value={qrValue}
                size={size}
                fgColor={fgColor}
                bgColor={bgColor}
                level="H"
                includeMargin
              />
            </div>
            <p className="text-xs text-gray-500 break-all max-w-xs text-center">{qrValue}</p>
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Tải xuống PNG
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
