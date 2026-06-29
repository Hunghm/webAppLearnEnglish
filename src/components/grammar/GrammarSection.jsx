export default function GrammarSection({ section }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 text-sm mb-2">{section.heading}</h3>
      <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed font-mono">
        {section.body}
      </p>
    </div>
  )
}
