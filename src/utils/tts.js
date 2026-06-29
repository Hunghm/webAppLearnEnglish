/**
 * Web Speech API wrapper for text-to-speech.
 */

let voicesLoaded = false;
let preferredVoice = null;

function loadVoices() {
  if (voicesLoaded) return;
  const voices = window.speechSynthesis?.getVoices() || [];
  if (voices.length > 0) {
    voicesLoaded = true;
    preferredVoice =
      voices.find(v => v.name === 'Samantha') ||
      voices.find(v => v.lang === 'en-US') ||
      voices.find(v => v.lang === 'en-GB') ||
      voices.find(v => v.lang.startsWith('en')) ||
      null;
  }
}

export function isSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speak(text, lang = 'en-GB') {
  if (!isSupported()) return;
  window.speechSynthesis.cancel();

  loadVoices();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  utterance.pitch = 1.0;
  if (preferredVoice) utterance.voice = preferredVoice;

  window.speechSynthesis.speak(utterance);
}

export function stop() {
  if (isSupported()) window.speechSynthesis.cancel();
}

// Initialize voices on load
if (isSupported()) {
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    voicesLoaded = false;
    loadVoices();
  });
  loadVoices();
}
