import { ALL_VOCABULARY } from './vocabulary.js';
import { SOURCE_LABELS, SOURCE_EMOJIS } from './units.js';
import { shuffle } from '../utils/helpers.js';


const imageKeywordMap = {
  // Ambiguous / abstract vocabulary
  "apologise": "apology",
  "cool": "relaxed calm",
  "defend": "protection defense",
  "divorced": "divorce separation",
  "flat": "apartment interior",
  "loving": "love affection",
  "mood": "emotion feeling",
  "neighbourhood": "neighborhood street",
  "ordinary": "everyday life simple",
  "patient": "patience calm",
  "private": "privacy alone",
  "recognise": "recognition identify",
  "relation": "family people",
  "rent": "apartment rental",
  "single": "alone individual",
  "stranger": "unknown person",
  // Phrasal verbs
  "bring up": "parenting family",
  "fall out with": "conflict argument",
  "get on with": "friendship smile",
  "go out with": "couple date",
  "grow up": "growing child",
  "let down": "disappointment sad",
  "look after": "caregiving nurture",
  "split up": "separation",
  // Word formations
  "able": "capability skill",
  "ability": "talent skill",
  "disabled": "accessibility",
  "unable": "impossible challenge",
  "admiration": "admire beauty",
  "careless": "reckless danger",
  "confidence": "confidence self",
  "forgiveness": "peace reconciliation",
  "honesty": "truth integrity",
  "dishonest": "deception",
  "introduction": "meeting people",
  "lie": "deception dishonesty",
  "liar": "deception",
  "lying": "dishonesty",
  "personality": "character people",
  "personal": "privacy personal",
  "relate": "connection",
  "relative": "family relatives",
  "relationship": "couple relationship",
  // Prepositional phrases
  "by yourself": "alone solitude",
  "in common with": "similarity sharing",
  "in contact with": "contact communication",
  "in love with": "love romance",
  "on purpose": "intention focus",
  "on your own": "independence",
  // Word patterns
  "fond of": "affection liking",
  "jealous of": "jealousy envy",
  "kind to": "kindness help",
  "married to": "wedding marriage",
  "proud of": "pride achievement",
  "admire for": "admiration",
  "apologise for": "apology sorry",
  "argue about": "argument debate",
  "care about": "compassion care",
  "chat about": "conversation friends",
  "argument about": "argument discussion",
  "relationship with": "couple togetherness",
};
// //
// Đăng ký tài khoản Cloudinary miễn phí để lấy Cloud Name của bạn
const CLOUDINARY_CLOUD_NAME = 'dipe6pl88';
// const PIXABAY_API_KEY = '56468288-5689d1fc39b7e2e6a0a37779a';

export async function getImageUrl(word) {
  const cacheKey = `img_${word}`
  const cached = localStorage.getItem(cacheKey)
  if (cached) return cached

  const keyword = (imageKeywordMap[word] ?? word).trim().replace(/\s+/g, '+');
  const url = `/api/pixabay?q=${encodeURIComponent(keyword)}&image_type=photo&per_page=3&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      const index = Math.abs(hashCode(word)) % data.hits.length;
      const imgUrl = data.hits[index].webformatURL;
      localStorage.setItem(cacheKey, imgUrl)
      return imgUrl;
    }

    return `https://loremflickr.com/600/400/${keyword.replace(/\+/g, ',')}`;

  } catch (error) {
    console.error("Lỗi:", error);
    return `https://loremflickr.com/600/400/vocabulary,book`;
  }
}

// export async function getImageUrl(word) {
//   // 1. Xử lý keyword (Pixabay dùng dấu cộng '+' để nối các từ, ví dụ: 'carry+on')
//   const keyword = (imageKeywordMap[word] ?? word).trim().replace(/\s+/g, '+');

//   // Bạn có thể ép kiểu ảnh về 'illustration' hoặc 'vector' để hợp với web từ vựng, hoặc để trống để lấy cả ảnh chụp
//   const imageType = 'photo'; 

//   const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=${imageType}&per_page=3&safesearch=true`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // 2. Nếu tìm thấy ảnh, trả về ảnh chất lượng vừa phải (webformatURL khoảng 640px rộng, tối ưu cho web)
//     if (data.hits && data.hits.length > 0) {
//       // Dùng thuật toán hashCode cũ của bạn để chọn ổn định 1 trong các ảnh trả về (tránh việc mỗi lần load ra 1 ảnh khác nhau)
//       const index = Math.abs(hashCode(word)) % data.hits.length;
//       const finalUrl = data.hits[index].webformatURL; // hoặc data.photos[index].src.large với Pexels

//       // CHÈN VÀO ĐÂY: Kiểm tra khi API trả về ảnh thành công
//       // console.log(`[API Thành Công] Từ: "${word}" -> Ảnh:`, finalUrl);

//       return finalUrl;
//     }

//     // 3. Fallback: Nếu không tìm thấy ảnh nào từ Pixabay, trả về 1 ảnh mặc định hoặc dùng lại LoremFlickr làm dự phòng
//     return `https://loremflickr.com/600/400/${keyword.replace(/\+/g, ',')}`;

//   } catch (error) {
//     console.error("Lỗi khi gọi Pixabay API:", error);
//     // Nếu API lỗi (hết hạn mức hoặc mất mạng), trả về ảnh dự phòng để giao diện không bị vỡ
//     return `https://loremflickr.com/600/400/vocabulary,book`;
//   }
// }

// Hàm hashCode giữ nguyên từ code cũ của bạn
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

// export function getImageUrl(word) {
//   // Tạo seed cố định dựa trên từ khóa để luôn ra cùng một ảnh cho cùng một từ
//   const seed = word.toLowerCase().replace(/\s+/g, '-');

//   // Dùng Picsum với seed và kích thước cố định
//   return `https://picsum.photos/seed/${seed}/600/400`;
// }

// export function getImageUrl(word) {
//   const keyword = (imageKeywordMap[word] ?? word).replace(/ /g, ',');
//   const lock = (hashCode(word) & 0x7fffffff) % 1000 + 1;
//   return `https://loremflickr.com/600/400/${keyword}?lock=${lock}`;
// }



export function getWordsByUnit(unitId) {
  return ALL_VOCABULARY.filter(w => w.unitId === unitId);
}

export function getWordsByUnitAndSource(unitId, source) {
  if (!source) return getWordsByUnit(unitId);
  return ALL_VOCABULARY.filter(w => w.unitId === unitId && w.source === source);
}

export function getTopicsForUnit(unitId) {
  const words = getWordsByUnit(unitId);
  return [...new Set(words.map(w => w.source))];
}

export function getStudySetsForUnit(unitId) {
  const allWords = getWordsByUnit(unitId);
  const topics = getTopicsForUnit(unitId);
  return [
    {
      name: 'Tất cả',
      emoji: '📚',
      count: allWords.length,
      unitId,
      source: null,
    },
    ...topics.map(source => ({
      name: SOURCE_LABELS[source] || source,
      emoji: SOURCE_EMOJIS[source] || '📝',
      count: getWordsByUnitAndSource(unitId, source).length,
      unitId,
      source,
    })),
  ];
}

/**
 * Build quiz questions from a word list.
 * Each question: { word, wordType, correctAnswer, allOptions }
 */
export function buildQuestions(words, unitId) {
  // Use all unit words as wrong-answer pool (or all vocabulary if no unit)
  const pool = unitId ? getWordsByUnit(unitId) : words;
  const shuffledWords = shuffle([...words]).slice(0, 30);

  return shuffledWords.map(entry => {
    const wrongPool = pool.filter(w => w.def !== entry.def);
    const wrongAnswers = shuffle([...wrongPool]).slice(0, 3).map(w => w.def);
    // Pad if not enough wrong answers
    while (wrongAnswers.length < 3) wrongAnswers.push('—');

    return {
      word: entry.word,
      wordType: entry.typeFull,
      correctAnswer: entry.def,
      allOptions: shuffle([...wrongAnswers, entry.def]),
    };
  });
}

/**
 * Convert word objects to flashcard format.
 */
// export function buildFlashcards(words) {
//   return words.map(w => ({
//     word: w.word,
//     wordType: w.typeFull,
//     definition: w.def,
//     example: w.example || '',
//     imageUrl: getImageUrl(w.word),
//   }));
// }
export async function buildFlashcards(vocabList) {
  console.log("buildFlashcards");

  // Dùng Promise.all để gọi API ảnh song song cho tất cả các từ cùng lúc, giúp tối ưu tốc độ
  const cards = await Promise.all(
    vocabList.map(async (v) => {
      const imageUrl = await getImageUrl(v.word);
      return {
        word: v.word,
        wordType: v.typeFull,
        definition: v.def,
        example: v.example || ' ',
        imageUrl: imageUrl, // Đưa link ảnh từ API vào cấu trúc card
        // ... các fields khác của bạn
      };
    })
  );
  return cards;
}


/**
 * Convert folder words to flashcard format.
 */
// export function buildFlashcardsFromFolder(folderWords) {
//   return folderWords.map(w => ({
//     word: w.word,
//     wordType: w.wordType || '',
//     definition: w.definition,
//     example: '',
//     imageUrl: getImageUrl(w.word),
//   }));
// }
export async function buildFlashcardsFromFolder(folderWords) {
  // Dùng Promise.all để kích hoạt gọi API ảnh song song cho tất cả các từ cùng lúc
  const cards = await Promise.all(
    folderWords.map(async (w) => {
      // Đợi lấy URL ảnh thực tế từ API (Pixabay/Pexels)
      const url = await getImageUrl(w.word);

      return {
        word: w.word,
        wordType: w.wordType || '',
        definition: w.definition,
        example: '',
        imageUrl: url, // Bây giờ 'url' đã là một string link ảnh thật sự
      };
    })
  );

  return cards;
}

/**
 * Build quiz questions from folder words.
 */
export function buildQuestionsFromFolder(folderWords) {
  const shuffled = shuffle([...folderWords]).slice(0, 30);
  return shuffled.map(entry => {
    const wrongPool = folderWords.filter(w => w.definition !== entry.definition);
    const wrongAnswers = shuffle([...wrongPool]).slice(0, 3).map(w => w.definition);
    while (wrongAnswers.length < 3) wrongAnswers.push('—');
    return {
      word: entry.word,
      wordType: entry.wordType || '',
      correctAnswer: entry.definition,
      allOptions: shuffle([...wrongAnswers, entry.definition]),
    };
  });
}
