import { useState, useCallback } from 'react';
import {
  getFolders, getFolder, saveFolder, deleteFolder,
  getWords, saveWords, addWord, deleteWord,
} from '../utils/storage.js';
import { generateId } from '../utils/helpers.js';

export function useUserFolders() {
  const [folders, setFolders] = useState(() => getFolders());

  const refresh = useCallback(() => {
    setFolders(getFolders());
  }, []);

  const createFolder = useCallback((name, emoji) => {
    const folder = {
      id: generateId(),
      name,
      emoji,
      createdAt: Date.now(),
    };
    saveFolder(folder);
    setFolders(getFolders());
    return folder;
  }, []);

  const removeFolder = useCallback((id) => {
    deleteFolder(id);
    setFolders(getFolders());
  }, []);

  return { folders, createFolder, removeFolder, refresh };
}

export function useFolderWords(folderId) {
  const [words, setWords] = useState(() => getWords(folderId));

  const add = useCallback((word) => {
    addWord(folderId, word);
    setWords(getWords(folderId));
  }, [folderId]);

  const remove = useCallback((wordText) => {
    deleteWord(folderId, wordText);
    setWords(getWords(folderId));
  }, [folderId]);

  const refresh = useCallback(() => {
    setWords(getWords(folderId));
  }, [folderId]);

  return { words, add, remove, refresh };
}
