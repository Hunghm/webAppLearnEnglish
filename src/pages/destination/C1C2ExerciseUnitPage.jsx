import { useNavigate, useParams } from 'react-router-dom'

// Returns the iframe src path for a given key
function getIframeSrc(key) {
  if (/^Review\s\d+$/.test(key)){ 
    return `/c1-units/review${key.match(/\d+/)[0]}/index.html`} else {
  if (/^Progress\sTest\s\d+$/.test(key)){ 
    return `/c1-units/progress_test${key.match(/\d+/)[0]}/index.html` } else {
  const m = key.match(/\d+/)
  if (m){ 
    return `/c1-units/unit${m[0]}/index.html`} else {
  return null
  }}}
}


function getHeaderColor(key) {
  if (/^review/.test(key)) return '#E65100'
  if (/^progress/.test(key)) return '#6A1B9A'
  return '#1565C0'
}

function formatLabel(key) {
  if (/^review(\d+)$/.test(key)) return `Review ${key.match(/\d+/)[0]} – Destination c1`
  if (/^progress-test-(\d+)$/.test(key)) return `Progress Test ${key.match(/\d+/)[0]} – Destination c1`
  return `${key} – Destination c1`
}

export default function C1C2ExerciseUnitPage() {
  const { unitKey } = useParams()
  const navigate = useNavigate()
  const key = decodeURIComponent(unitKey)
  const src = getIframeSrc(key)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Back button overlay */}
      <div style={{
        background: getHeaderColor(key), color: 'white',
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        flexShrink: 0,
      }}>
        <button
          onClick={() => navigate('/destination/c1c2/exercises')}
          style={{
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: 34, height: 34, cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span style={{ fontWeight: 700, fontSize: '1rem' }}>{formatLabel(key)}</span>
      </div>

      {/* Iframe chứa toàn bộ nội dung + thiết kế gốc */}
      {src ? (
        <iframe
          src={src}
          style={{ flex: 1, border: 'none', width: '100%' }}
          title={key}
          onLoad={e => {
            try {
              const doc = e.target.contentDocument
              if (doc) {
                const s = doc.createElement('style')
                s.textContent = '.content { padding-bottom: 100px !important; }'
                doc.head.appendChild(s)
              }
            } catch (_) {}
          }}
        />
      ) : (
        <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>Không tìm thấy nội dung.</div>
      )}
    </div>
  )
}
