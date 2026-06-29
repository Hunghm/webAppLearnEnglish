import { useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../../components/layout/PageHeader.jsx'
import { GRAMMAR_B1 } from '../../data/destination/b1-grammar.js'

// ── Note type styles ──
const NOTE_STYLES = {
  watchOut: {
    label: '⚠️ Watch out!',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    labelColor: 'text-amber-700',
  },
  usVsUk: {
    label: '🇺🇸 US vs 🇬🇧 UK English',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-800',
    labelColor: 'text-sky-700',
  },
}

function NoteBox({ note }) {
  const style = NOTE_STYLES[note.type] || NOTE_STYLES.watchOut
  return (
    <div className={`rounded-xl border ${style.bg} ${style.border} p-3 mt-3`}>
      <div className={`text-xs font-bold mb-2 ${style.labelColor}`}>{style.label}</div>
      {note.bullets.map((bullet, i) => (
        <div
          key={i}
          className={`text-sm ${style.text} mb-1 last:mb-0 leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: bullet }}
        />
      ))}
    </div>
  )
}

function FormTable({ form }) {
  if (!form || !form.rows) return null
  return (
    <div className="mt-3">
      {form.intro && (
        <p
          className="text-sm text-gray-600 mb-2 italic"
          dangerouslySetInnerHTML={{ __html: form.intro }}
        />
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <tbody>
            {form.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-3 py-2 border-b border-gray-100 last:border-b-0 ${
                      ci === 0 ? 'font-semibold text-gray-500 text-xs uppercase w-24 flex-shrink-0' : 'text-gray-700'
                    }`}
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function UseTable({ useTable }) {
  if (!useTable || !useTable.rows) return null
  return (
    <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-600 text-white">
            {useTable.headers.map((h, i) => (
              <th
                key={i}
                className="px-3 py-2 text-left font-semibold text-xs"
                dangerouslySetInnerHTML={{ __html: h }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {useTable.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-2 border-b border-gray-100 last:border-b-0 ${
                    ci === 0 ? 'font-medium text-gray-700' : 'text-gray-600'
                  }`}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function GrammarSection({ section }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      {/* Section header */}
      <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
        <h3 className="font-bold text-blue-800 text-sm">{section.name}</h3>
      </div>

      <div className="p-4">
        {/* Intro (for sections without form) */}
        {section.intro && (
          <p
            className="text-sm text-gray-700 mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.intro }}
          />
        )}

        {/* Form table */}
        {section.form && section.form.rows && (
          <>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Form</div>
            <FormTable form={section.form} />
          </>
        )}

        {/* Use table */}
        {section.useTable && section.useTable.rows && (
          <>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-4 mb-1">Use</div>
            <UseTable useTable={section.useTable} />
          </>
        )}

        {/* Notes */}
        {section.notes && section.notes.length > 0 && section.notes.map((note, ni) => (
          <NoteBox key={ni} note={note} />
        ))}
      </div>
    </div>
  )
}

export default function B1GrammarDetailPage() {
  const { unitIndex } = useParams()
  const navigate = useNavigate()
  const lesson = GRAMMAR_B1[parseInt(unitIndex)]

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Grammar" onBack={() => navigate('/destination/b2')} />
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
        subtitle={lesson.title}
        onBack={() => navigate('/destination/b2')}
      />

      <div className="max-w-3xl mx-auto px-4 py-4 pb-10">
        {/* Title card */}
        <div className="bg-blue-700 text-white rounded-xl p-4 mb-4">
          <div className="text-xs text-blue-200 mb-1">Destination B2 · Unit {lesson.unit}</div>
          <div className="font-bold text-base">{lesson.title}</div>
          <div className="text-sm text-blue-200 mt-1">{lesson.subtitle}</div>
        </div>

        {/* Sections */}
        {lesson.sections.map((section, i) => (
          <GrammarSection key={i} section={section} />
        ))}
      </div>
    </div>
  )
}
