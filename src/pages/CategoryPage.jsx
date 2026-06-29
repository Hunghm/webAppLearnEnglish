import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader.jsx'
import StudySetItem from '../components/category/StudySetItem.jsx'
import ModeModal from '../components/category/ModeModal.jsx'
import { UNITS } from '../data/units.js'
import { getStudySetsForUnit } from '../data/quizData.js'

export default function CategoryPage() {
  const { unitId } = useParams()
  const [selectedSet, setSelectedSet] = useState(null)

  const unit = UNITS.find(u => u.id === unitId)
  const studySets = getStudySetsForUnit(unitId)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={unit?.displayName || unitId}
        subtitle={unit?.topic}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {studySets.map((set, i) => (
            <StudySetItem key={i} studySet={set} onClick={setSelectedSet} />
          ))}
        </div>
      </div>

      {selectedSet && (
        <ModeModal
          studySet={selectedSet}
          onClose={() => setSelectedSet(null)}
        />
      )}
    </div>
  )
}
