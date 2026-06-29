import { useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader.jsx'
import { GRAMMAR_LESSONS } from '../data/grammar.js'
import '../components/grammar/grammar-content.css'

export default function GrammarDetailPage() {
  const { index } = useParams()
  const navigate = useNavigate()
  const lesson = GRAMMAR_LESSONS[parseInt(index)]

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Ngữ pháp" />
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
        onBack={() => navigate('/?tab=grammar')}
      />

      <div className="max-w-3xl mx-auto px-4 py-4 pb-8">
        {/* Title card */}
        <div className="bg-blue-700 text-white rounded-xl p-4 mb-4">
          <div className="text-xs text-blue-200 mb-1">Unit {lesson.unit}</div>
          <div className="font-bold text-base">{lesson.titleEn}</div>
          <div className="text-sm text-blue-200 mt-1 italic">{lesson.title}</div>
        </div>

        {/* Grammar HTML content */}
        <div
          className="grammar-html-content bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          dangerouslySetInnerHTML={{ __html: lesson.htmlContent }}
        />
      </div>
    </div>
  )
}
