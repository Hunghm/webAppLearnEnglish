import { useEffect, useState, useCallback } from 'react';
import { speak as ttsSpeak, stop as ttsStop, isSupported } from '../utils/tts.js';

export function useTTS() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isSupported()) return;

    const checkVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) setReady(true);
    };

    window.speechSynthesis.addEventListener('voiceschanged', checkVoices);
    checkVoices();

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', checkVoices);
    };
  }, []);

  const speak = useCallback((text) => {
    ttsSpeak(text);
  }, []);

  const stop = useCallback(() => {
    ttsStop();
  }, []);

  return { ready, speak, stop, supported: isSupported() };
}
