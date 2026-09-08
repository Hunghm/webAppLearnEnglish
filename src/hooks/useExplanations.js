import { useState, useEffect } from 'react'

let cachedData = null

/**
 * Loads /explanations.json once and caches it.
 * Shape: { "<unit>": { "<exercise letter>": { "<question id>": "<giải thích>" } } }
 * Missing units/exercises/questions simply have no explanation (button hidden).
 */
export function useExplanations() {
  const [data, setData] = useState(cachedData)

  useEffect(() => {
    if (cachedData) { setData(cachedData); return }
    fetch('/explanations.json')
      .then(r => (r.ok ? r.json() : {}))
      .then(d => { cachedData = d; setData(d) })
      .catch(() => { cachedData = {}; setData({}) })
  }, [])

  return data
}
