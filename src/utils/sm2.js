/**
 * SM-2 Spaced Repetition Algorithm
 * Port of SRManager.kt
 *
 * localStorage key: sr__{encodedWord}
 * Value: JSON { rep: Int, ef: Float, iv: Int, nr: Long (epoch ms) }
 */
import { encodeKey, decodeKey } from './helpers.js';

const KEY_PREFIX = 'sr__';
const QUALITY_CORRECT = 4;
const QUALITY_WRONG = 1;

function getKey(word) {
  return KEY_PREFIX + encodeKey(word);
}

function getData(word) {
  const raw = localStorage.getItem(getKey(word));
  if (!raw) return null;
  return JSON.parse(raw);
}

function setData(word, data) {
  localStorage.setItem(getKey(word), JSON.stringify(data));
}

function update(word, quality) {
  const existing = getData(word) || { rep: 0, ef: 2.5, iv: 1 };
  const { rep, ef, iv } = existing;

  let newRep, newEF, newIv;

  if (quality >= 3) {
    // Correct answer
    newIv = rep === 0 ? 1 : rep === 1 ? 6 : Math.round(iv * ef);
    newEF = Math.max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    newRep = rep + 1;
  } else {
    // Wrong answer — reset
    newRep = 0;
    newEF = ef; // keep ease factor
    newIv = 1;  // reset interval
  }

  // Wrong → due immediately; Correct → scheduled
  const nextReview = quality >= 3
    ? Date.now() + newIv * 86400000
    : Date.now();

  setData(word, { rep: newRep, ef: newEF, iv: newIv, nr: nextReview });
}

export function recordCorrect(word) {
  update(word, QUALITY_CORRECT);
}

export function recordWrong(word) {
  update(word, QUALITY_WRONG);
}

/**
 * Returns words that have been reviewed at least once
 * AND whose next-review date is <= now.
 */
export function getDueWords() {
  const now = Date.now();
  const dueWords = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.startsWith(KEY_PREFIX)) continue;
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (data && data.nr <= now) {
        const word = decodeKey(key.slice(KEY_PREFIX.length));
        dueWords.push(word);
      }
    } catch {
      // Skip invalid entries
    }
  }

  return dueWords;
}

export function getDueCount() {
  return getDueWords().length;
}

export function getProgress(word) {
  const data = getData(word);
  if (!data) return null;
  return { rep: data.rep, iv: data.iv, nextReview: data.nr };
}

export function clearAllSR() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(KEY_PREFIX)) keys.push(key);
  }
  keys.forEach(k => localStorage.removeItem(k));
}
