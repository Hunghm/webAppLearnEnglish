/**
 * localStorage wrapper for user folders and words.
 * Schema:
 *   ql_folder_ids      → JSON string[] (UUIDs)
 *   ql_folder_{uuid}   → JSON { id, name, emoji, createdAt }
 *   ql_words_{uuid}    → JSON { word, wordType, definition }[]
 */

const FOLDER_IDS_KEY = 'ql_folder_ids';

// ── Folder CRUD ──────────────────────────────────────────────────────────────

export function getFolderIds() {
  const raw = localStorage.getItem(FOLDER_IDS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

export function getFolders() {
  return getFolderIds()
    .map(id => getFolder(id))
    .filter(Boolean);
}

export function getFolder(id) {
  const raw = localStorage.getItem(`ql_folder_${id}`);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveFolder(folder) {
  localStorage.setItem(`ql_folder_${folder.id}`, JSON.stringify(folder));
  const ids = getFolderIds();
  if (!ids.includes(folder.id)) {
    ids.push(folder.id);
    localStorage.setItem(FOLDER_IDS_KEY, JSON.stringify(ids));
  }
}

export function deleteFolder(id) {
  const ids = getFolderIds().filter(fid => fid !== id);
  localStorage.setItem(FOLDER_IDS_KEY, JSON.stringify(ids));
  localStorage.removeItem(`ql_folder_${id}`);
  localStorage.removeItem(`ql_words_${id}`);
}

// ── Word CRUD ─────────────────────────────────────────────────────────────────

export function getWords(folderId) {
  const raw = localStorage.getItem(`ql_words_${folderId}`);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

export function saveWords(folderId, words) {
  localStorage.setItem(`ql_words_${folderId}`, JSON.stringify(words));
}

export function addWord(folderId, word) {
  const words = getWords(folderId);
  words.push(word);
  saveWords(folderId, words);
}

export function deleteWord(folderId, wordText) {
  const words = getWords(folderId).filter(w => w.word !== wordText);
  saveWords(folderId, words);
}
