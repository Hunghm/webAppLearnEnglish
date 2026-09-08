/**
 * Persist "how far did I get" for the Grammar & Vocabulary exercises.
 *
 * One localStorage key holds everything so the unit list can summarise progress
 * without scanning many keys:
 *
 *   ql_exprog_v1 → {
 *     "<unit name>": {
 *       "<exercise label>": {
 *         answers,            // ExerciseBlock answers object (to restore the form)
 *         checked,            // was "Kiểm tra" pressed
 *         score,              // { correct, total } or null
 *         answered,           // how many questions have an answer
 *         total,              // question count
 *         status,             // 'done' | 'started'
 *         ts                  // last update (ms)
 *       }
 *     }
 *   }
 */

const KEY = 'ql_exprog_v1'

export function getAllProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

function writeAll(obj) {
  try {
    localStorage.setItem(KEY, JSON.stringify(obj))
  } catch {
    /* quota / private mode — progress just won't persist */
  }
}

export function getExerciseProgress(unit, exLabel) {
  return getAllProgress()[unit]?.[exLabel] ?? null
}

export function saveExerciseProgress(unit, exLabel, patch) {
  const all = getAllProgress()
  if (!all[unit]) all[unit] = {}
  all[unit][exLabel] = { ...(all[unit][exLabel] || {}), ...patch, ts: Date.now() }
  writeAll(all)
}

export function clearExerciseProgress(unit, exLabel) {
  const all = getAllProgress()
  if (all[unit]) {
    delete all[unit][exLabel]
    if (Object.keys(all[unit]).length === 0) delete all[unit]
    writeAll(all)
  }
}

export function clearUnitProgress(unit) {
  const all = getAllProgress()
  if (all[unit]) {
    delete all[unit]
    writeAll(all)
  }
}

export function clearAllProgress() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}

/**
 * Summary for one unit: how many exercises have been finished / touched.
 * Pass the pre-parsed blob from getAllProgress() to avoid re-reading storage
 * once per unit card.
 */
export function summariseUnit(unit, all = getAllProgress()) {
  const u = all[unit] || {}
  const entries = Object.values(u)
  return {
    done: entries.filter(e => e.status === 'done').length,
    started: entries.length,
  }
}
