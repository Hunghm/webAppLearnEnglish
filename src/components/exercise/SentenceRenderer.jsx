// ─── Stop words: marks the END of an option, start of shared context ───────
const STOP_WORDS = new Set([
  // Prepositions
  'at','in','on','to','for','of','about','with','by','from','as','up','down','out','off','over',
  // Conjunctions
  'so','because','although','though','if','unless','until','since','while',
  'and','but','or','nor',
  // Articles
  'the','a','an',
  // Relative / subordinating
  'that','which','where','when','what','who','whom','whose',
  // Possessives
  'my','your','his','her','its','our','their',
  // Object pronouns
  'me','him','us','them',
  // Determiners / quantifiers
  'this','these','those','any','some','every','each','all','no','few','many','much','more',
  // Adverbs that start shared context
  'well','soon','then','never','always','yet','still','already','too','just',
])

// Auxiliary verbs — option2 can start with these (we should take > 1 word)
const AUXILIARIES = new Set([
  'am','is','are','was','were',
  'do','does','did',
  'have','has','had','been','being','be',
  'will','would','can','could','shall','should','may','might','must',
  "isn't","aren't","wasn't","weren't",
  "don't","doesn't","didn't",
  "haven't","hasn't","hadn't",
  "won't","wouldn't","can't","couldn't","shan't","shouldn't","mightn't","mustn't",
  'get','gets','got','going',
])

// Take the minimal option phrase from a word array, capped at maxWords
function takeOption(words, maxWords = 4) {
  const result = []
  for (const w of words) {
    if (result.length >= maxWords) break
    const clean = w.replace(/[.,!?;:]$/, '').toLowerCase()
    // Stop at a stop-word BUT always include the first word
    if (result.length > 0 && STOP_WORDS.has(clean)) break
    result.push(w.replace(/[.,!?;:]$/, ''))
  }
  return result.join(' ')
}

// Subject pronouns and interrogatives that mark the start of option1 context
const SUBJECTS = new Set([
  'i','you','he','she','it','we','they','elizabeth','dan','my','your',
  'does','do','did','is','are','was','were','has','have','had',
])

// Take last N words from a word array (for option1 boundary detection)
function takeOptionFromRight(words, maxWords = 4) {
  const result = []
  for (let i = words.length - 1; i >= 0; i--) {
    if (result.length >= maxWords) break
    const clean = words[i].replace(/[.,!?;:]$/, '').toLowerCase()
    if (result.length > 0 && STOP_WORDS.has(clean) && !AUXILIARIES.has(clean)) break
    result.unshift(words[i].replace(/[.,!?;:]$/, ''))
  }
  return result
}

/**
 * Parse a circle_correct sentence like:
 *   "I work / am working at the local library for the summer."
 *
 * Works with or without a known correct answer.
 * Returns { before, option1, option2, after } or null on failure.
 */
export function parseCircleOptions(sentence, answer) {
  const slashIdx = sentence.indexOf(' / ')
  if (slashIdx === -1) return null

  const beforeSlash = sentence.slice(0, slashIdx)
  const afterSlash  = sentence.slice(slashIdx + 3)

  // ── With known answer: use precise matching ─────────────────────────────
  if (answer) {
    const ans = answer.trim()
    const norm = s => s.toLowerCase().trim()
    const afterNorm  = norm(afterSlash)
    const beforeNorm = norm(beforeSlash)
    const ansNorm    = norm(ans)

    const aStartsWithAns =
      afterNorm === ansNorm ||
      afterNorm.startsWith(ansNorm + ' ')  ||
      afterNorm.startsWith(ansNorm + ',')  ||
      afterNorm.startsWith(ansNorm + '.')  ||
      afterNorm.startsWith(ansNorm + '!')  ||
      afterNorm.startsWith(ansNorm + '?')

    if (aStartsWithAns) {
      const option2 = ans
      const after   = afterSlash.slice(ans.length)
      const bWords  = beforeSlash.trim().split(/\s+/)
      const option1 = bWords[bWords.length - 1].replace(/[.,!?;:]$/, '')
      const before  = bWords.slice(0, -1).join(' ') + (bWords.length > 1 ? ' ' : '')
      return { before, option1, option2, after }
    }

    const bEndsWithAns =
      beforeNorm === ansNorm ||
      beforeNorm.endsWith(' ' + ansNorm)

    if (bEndsWithAns) {
      const option1   = ans
      const beforeRaw = beforeSlash.slice(0, beforeSlash.length - ans.length)
      const before    = beforeRaw ? beforeRaw.trimEnd() + ' ' : ''
      const aWords    = afterSlash.trim().split(/\s+/)
      const firstWord = aWords[0]?.replace(/[.,!?;:]$/, '').toLowerCase() ?? ''
      const ansN      = ans.split(/\s+/).length
      const maxN      = Math.min(ansN + 1, 4)
      const option2   = (ansN === 1 && !AUXILIARIES.has(firstWord))
        ? aWords[0].replace(/[.,!?;:]$/, '')
        : takeOption(aWords, maxN)
      const after     = afterSlash.slice(option2.length)
      return { before, option1, option2, after }
    }
  }

  // ── No answer (or answer didn't match): heuristic parse ─────────────────
  const bWords = beforeSlash.trim().split(/\s+/)
  const aWords = afterSlash.trim().split(/\s+/)

  // option2: first words of right side until shared context
  const opt2Words = takeOption(aWords, 4)
  const option2   = opt2Words
  const after     = afterSlash.slice(option2.length)

  // option1: last words of left side, same count as option2 (± 1)
  const targetN   = Math.max(1, option2.split(/\s+/).length)
  const opt1Words = takeOptionFromRight(bWords, targetN + 1)
  const option1   = opt1Words.join(' ')
  const before    = bWords.slice(0, bWords.length - opt1Words.length).join(' ') +
    (bWords.length > opt1Words.length ? ' ' : '')

  if (!option1 || !option2) return null
  return { before, option1, option2, after }
}

// ─── React Components ────────────────────────────────────────────────────────

export function InlineInput({ value, onChange, checked, isCorrect, size = 'md' }) {
  const widths = { sm: 'w-20', md: 'w-28', lg: 'w-36', xl: 'w-44' }
  const base   = 'inline-block border-2 rounded px-2 py-0.5 text-sm outline-none transition-colors align-baseline mx-0.5'
  const state  = checked
    ? isCorrect
      ? 'border-green-400 bg-green-50 text-green-800'
      : 'border-red-400 bg-red-50 text-red-800'
    : 'border-blue-200 bg-gray-50 focus:border-blue-400 focus:bg-white'
  return (
    <input
      type="text"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      disabled={checked}
      className={`${base} ${widths[size]} ${state}`}
      placeholder="…"
    />
  )
}

export function InlineChoiceButtons({ options, selected, onSelect, checked, correctAnswer }) {
  return (
    <span className="inline-flex gap-1 mx-1 align-baseline flex-wrap">
      {options.map((opt, i) => {
        const isSelected   = selected === opt
        const isCorrectOpt = opt.toLowerCase() === (correctAnswer || '').toLowerCase()
        let cls = 'border-2 rounded px-3 py-0.5 text-sm cursor-pointer transition-all '
        if (checked) {
          if (isCorrectOpt)             cls += 'bg-green-500 border-green-500 text-white'
          else if (isSelected)          cls += 'bg-red-500 border-red-500 text-white'
          else                          cls += 'border-blue-200 bg-white text-blue-500 opacity-50'
        } else {
          cls += isSelected
            ? 'bg-blue-600 border-blue-600 text-white'
            : 'border-blue-200 bg-white text-blue-800 hover:bg-blue-50'
        }
        return (
          <button key={i} type="button" onClick={() => !checked && onSelect(opt)} className={cls}>
            {opt}
          </button>
        )
      })}
    </span>
  )
}
