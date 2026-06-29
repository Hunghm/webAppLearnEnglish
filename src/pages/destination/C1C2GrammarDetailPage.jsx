import { useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../../components/layout/PageHeader.jsx'
import { ALL_GRAMMAR } from '../../data/destination/c1c2-grammar.js'

// ── Section renderers ──

function GrammarPoint({ section }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <div className="bg-purple-50 px-4 py-3 border-b border-purple-100">
        <h3 className="font-bold text-purple-800 text-sm">{section.title}</h3>
      </div>
      <div className="p-4">
        {section.intro && (
          <p className="text-sm text-gray-600 mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.intro }} />
        )}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="px-3 py-2 text-left font-semibold text-xs w-2/5">Use</th>
                <th className="px-3 py-2 text-left font-semibold text-xs">Example</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-700 align-top">
                    {row.usage}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-600 align-top"
                    dangerouslySetInnerHTML={{ __html: row.example }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function GrammarPoint3Col({ section }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <div className="bg-purple-50 px-4 py-3 border-b border-purple-100">
        <h3 className="font-bold text-purple-800 text-sm">{section.title}</h3>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-purple-600 text-white">
              {(section.headers || ['Form', 'Modals/Verbs', 'Example']).map((h, i) => (
                <th key={i} className="px-3 py-2 text-left font-semibold text-xs">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                <td className="px-3 py-2 border-b border-gray-100 text-gray-700 align-top text-xs leading-relaxed">
                  {row.form}
                </td>
                <td className="px-3 py-2 border-b border-gray-100 text-gray-500 align-top text-xs leading-relaxed italic">
                  {row.verbs}
                </td>
                <td className="px-3 py-2 border-b border-gray-100 text-gray-600 align-top"
                  dangerouslySetInnerHTML={{ __html: row.example }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GrammarPointGrouped({ section }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <div className="bg-purple-50 px-4 py-3 border-b border-purple-100">
        <h3 className="font-bold text-purple-800 text-sm">{section.title}</h3>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="px-3 py-2 text-left font-semibold text-xs w-1/5">Group</th>
              <th className="px-3 py-2 text-left font-semibold text-xs w-1/4">Sub-type</th>
              <th className="px-3 py-2 text-left font-semibold text-xs w-1/5">Modals</th>
              <th className="px-3 py-2 text-left font-semibold text-xs">Example</th>
            </tr>
          </thead>
          <tbody>
            {section.groups.map((g, gi) =>
              g.rows.map((row, ri) => (
                <tr key={`${gi}-${ri}`} className={(gi + ri) % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                  {ri === 0 && (
                    <td rowSpan={g.rows.length}
                      className="px-3 py-2 border-b border-gray-100 font-semibold text-purple-700 text-xs align-top bg-purple-50">
                      {g.group}
                    </td>
                  )}
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-700 align-top text-xs">{row.sub}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-500 align-top text-xs italic">{row.modals}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-600 align-top"
                    dangerouslySetInnerHTML={{ __html: row.example }} />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function WordsBox({ section }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
      <div className="text-xs font-bold text-blue-700 mb-2">📦 {section.title}</div>
      <p className="text-sm text-blue-800 leading-relaxed">{section.content}</p>
    </div>
  )
}

function WatchOut({ section }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
      <div className="text-xs font-bold text-amber-700 mb-2">⚠️ Watch out!</div>
      <ul className="space-y-2">
        {section.items.map((item, i) => (
          <li key={i} className="text-sm text-amber-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
        ))}
      </ul>
    </div>
  )
}

function GrammarNote({ section }) {
  return (
    <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-4">
      {section.title && (
        <div className="text-xs font-bold text-sky-700 mb-2">📌 {section.title}</div>
      )}
      <ul className="space-y-2">
        {section.items.map((item, i) => (
          <li key={i} className="text-sm text-sky-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
        ))}
      </ul>
    </div>
  )
}

function SectionRenderer({ section }) {
  switch (section.type) {
    case 'grammar-point':         return <GrammarPoint section={section} />
    case 'grammar-point-3col':    return <GrammarPoint3Col section={section} />
    case 'grammar-point-grouped': return <GrammarPointGrouped section={section} />
    case 'words-box':             return <WordsBox section={section} />
    case 'watch-out':             return <WatchOut section={section} />
    case 'grammar-note':          return <GrammarNote section={section} />
    default:                      return null
  }
}

export default function C1C2GrammarDetailPage() {
  const { unitIndex } = useParams()
  const navigate = useNavigate()
  const lesson = ALL_GRAMMAR[parseInt(unitIndex)]

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Grammar" onBack={() => navigate('/destination/c1c2')} />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Bài học không tồn tại.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={`Unit ${lesson.unit}`}
        subtitle={lesson.topic}
        onBack={() => navigate('/destination/c1c2')}
      />

      <div className="max-w-3xl mx-auto px-4 py-4 pb-10">
        {/* Title card */}
        <div className="bg-purple-700 text-white rounded-xl p-4 mb-4">
          <div className="text-xs text-purple-200 mb-1">Destination C1/C2 · Unit {lesson.unit}</div>
          <div className="font-bold text-base">{lesson.topic}</div>
        </div>

        {lesson.sections.map((section, i) => (
          <SectionRenderer key={i} section={section} />
        ))}
      </div>
    </div>
  )
}
