import { useCallback } from 'react';
import { recordCorrect, recordWrong, getDueCount, getDueWords } from '../utils/sm2.js';

export function useSR() {
  const markCorrect = useCallback((word) => {
    recordCorrect(word);
  }, []);

  const markWrong = useCallback((word) => {
    recordWrong(word);
  }, []);

  const getDue = useCallback(() => getDueWords(), []);
  const getCount = useCallback(() => getDueCount(), []);

  return { markCorrect, markWrong, getDue, getCount };
}
