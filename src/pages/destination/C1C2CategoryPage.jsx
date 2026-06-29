import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PageHeader from '../../components/layout/PageHeader.jsx'
import StudySetItem from '../../components/category/StudySetItem.jsx'
import ModeModal2 from '../../components/category/ModeModal2.jsx'
import { ALL_VOCABULARY } from '../../data/destination/c1c2-vocabulary.js'

const SOURCE_LABELS = {
  'vocab': 'Từ vựng', 'phrasal-verb': 'Phrasal verb',
  'word-formation': 'Cấu tạo từ', 'prepositional': 'Cụm giới từ', 'word-pattern': 'Mẫu từ vựng',
}
const SOURCE_EMOJIS = {
  'vocab': '📖', 'phrasal-verb': '🔗', 'word-formation': '🏗️', 'prepositional': '📍', 'word-pattern': '🎯',
}
const UNIT_TOPICS = {
  'unit2': 'Thinking and learning', 'unit4': 'Change and technology', 'unit6': 'Time and work',
  'unit8': 'Movement and transport', 'unit10': 'Communication and the media', 'unit12': 'Chance and nature',
  'unit14': 'Quantity and money', 'unit16': 'Materials and the built environment', 'unit18': 'Reactions and health',
  'unit20': 'Power and social issues', 'unit22': 'Quality and the arts', 'unit24': 'Relationships and people',
  'unit26': 'Preference and leisure activities',
}

export default function C1C2CategoryPage() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const [selectedSet, setSelectedSet] = useState(null)

  const allWords = ALL_VOCABULARY.filter(w => w.unitId === unitId)
  const sources = [...new Set(allWords.map(w => w.source))]
  const unitNum = unitId.replace('unit', '')

  const studySets = [
    { name: 'Tất cả', emoji: '📚', count: allWords.length, words: allWords },
    ...sources.map(src => ({
      name: SOURCE_LABELS[src] || src,
      emoji: SOURCE_EMOJIS[src] || '📝',
      count: allWords.filter(w => w.source === src).length,
      words: allWords.filter(w => w.source === src),
      unitId: unitId,
      destination: "c1c2",
    })),
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={`Unit ${unitNum}`}
        subtitle={UNIT_TOPICS[unitId]}
        onBack={() => navigate('/destination/c1c2')}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {studySets.map((set, i) => (
            <StudySetItem key={i} studySet={set} onClick={setSelectedSet} />
          ))}
        </div>
      </div>

      {selectedSet && (
        <ModeModal2
          studySet={selectedSet}
          isFolder={true}
          folderWords={selectedSet.words}
          onClose={() => setSelectedSet(null)}
        />
      )}
    </div>
  )
}
