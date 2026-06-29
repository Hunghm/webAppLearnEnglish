/**
 * Shuffle an array using Fisher-Yates algorithm.
 * Returns a new array (does not mutate original).
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Encode a word to a safe localStorage key.
 * Matches Android SRManager.encodeKey()
 */
export function encodeKey(word) {
  return word.replace(/ /g, '_').replace(/\//g, '-').replace(/\./g, ',');
}

/**
 * Decode a localStorage key back to a word.
 */
export function decodeKey(key) {
  return key.replace(/_/g, ' ').replace(/-/g, '/').replace(/,/g, '.');
}

/**
 * Generate a UUID (uses crypto.randomUUID if available).
 */
export function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Format a timestamp as a relative date string.
 */
export function formatDate(ts) {
  const now = Date.now();
  const diff = ts - now;
  if (diff <= 0) return 'Hôm nay';
  const days = Math.ceil(diff / 86400000);
  if (days === 1) return 'Ngày mai';
  return `${days} ngày nữa`;
}
