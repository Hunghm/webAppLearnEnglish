import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PageHeader from '../../components/layout/PageHeader.jsx'
import StudySetItem from '../../components/category/StudySetItem.jsx'
import ModeModal2 from '../../components/category/ModeModal2.jsx'
import { VOCAB_B1 } from '../../data/destination/b1-vocabulary.js'
// import { getStudySetsForUnit } from '../../data/quizData.js'

const SOURCE_LABELS = {
  'vocab': 'Từ vựng', 'phrasal-verb': 'Phrasal verb',
  'word-formation': 'Cấu tạo từ', 'prepositional': 'Cụm giới từ', 'word-pattern': 'Mẫu từ vựng',
}
const SOURCE_EMOJIS = {
  'vocab': '📖', 'phrasal-verb': '🔗', 'word-formation': '🏗️', 'prepositional': '📍', 'word-pattern': '🎯',
}
const UNIT_TOPICS = {
  2: 'Travel and transport', 4: 'Hobbies, sport and games', 6: 'Science and technology',
  8: 'The media', 10: 'People and society', 12: 'The law and crime', 14: 'Health and fitness',
  16: 'Food and drink', 18: 'Education', 20: 'The environment', 22: 'Shopping and money',
  24: 'Entertainment', 26: 'Fashion and design', 28: 'Work and business',
}

export default function B2CategoryPage() {

  const { unitId } = useParams()
  const navigate = useNavigate()
  const [selectedSet, setSelectedSet] = useState(null)

  const uid = parseInt(unitId)
  const allWords = VOCAB_B1.filter(w => w.unitId === uid)
  const sources = [...new Set(allWords.map(w => w.source))]
  // console.log("allWords: "+JSON.stringify(allWords[0], null, 2))
  const studySets = [
    { name: 'Tất cả', emoji: '📚', count: allWords.length, words: allWords },
    ...sources.map(src => ({
      name: SOURCE_LABELS[src] || src,
      emoji: SOURCE_EMOJIS[src] || '📝',
      count: allWords.filter(w => w.source === src).length,
      words: allWords.filter(w => w.source === src),
      unitId: unitId,
      destination: "b2",
    })),
  ]
  // const studySets = getStudySetsForUnit(unitId);
  // console.log("selectedSet: "+selectedSet);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={`Unit ${uid}`}
        subtitle={UNIT_TOPICS[uid]}
        onBack={() => navigate('/destination/b2')}
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
