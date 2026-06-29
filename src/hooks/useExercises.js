import { useState, useEffect } from 'react'

let cachedData = null

export function useExercises() {
  const [data, setData] = useState(cachedData)
  const [loading, setLoading] = useState(!cachedData)

  useEffect(() => {
    if (cachedData) { setData(cachedData); setLoading(false); return }
    fetch('/exercises.json')
      .then(r => r.json())
      .then(d => { cachedData = d; setData(d); setLoading(false) })
  }, [])

  return { data, loading }
}

export function groupPagesByUnit(data) {
  if (!data) return []
  const map = {}
  const order = []
  data.forEach(page => {
    const key = page.unit
    if (!map[key]) { map[key] = { unit: key, sections: [], totalExercises: 0 }; order.push(key) }
    map[key].sections.push({ pdf_page: page.pdf_page, book_page: page.book_page, section: page.section, exercises: page.exercises })
    map[key].totalExercises += page.exercises.length
  })
  return order.map(k => map[k])
}
