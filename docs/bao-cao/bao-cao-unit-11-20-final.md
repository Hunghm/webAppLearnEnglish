# Unit 11–20 — đã test lại trên browser

Đã click test trực tiếp trên `localhost:5173`. Kết quả:

| Unit / Bài | Test | Kết quả |
|---|---|---|
| Unit 11 Ex A (matching→trắc nghiệm) | chọn "D. being driven by a clown" → Kiểm tra | ✅ XANH, 1/6 |
| Unit 15 Ex A (circle passage) | mở | ✅ render đúng cặp lựa chọn |
| Unit 15 Ex F (error correction, 10 câu) | điền service/decision/affordable | ✅ 3 ô XANH |
| Unit 15 Ex G (circle "on/to"…) | mở | ✅ tách đúng "on / to", "at / from" (trước đây hỏng "money on / to George") |
| Unit 16 Ex A (word bank, multi-blank) | mở | ✅ 6 câu, ô đôi hiển thị đúng |
| **Unit 16 Ex F (passage 15 chỗ trống)** | điền 15 đáp án | ✅ **15/15 – 100%** |
| **Unit 17 Ex A (where/which/who/whose)** | điền 8 đáp án | ✅ **8/8 – 100%** |
| Unit 17 Ex E (tick_cross) | mở | ✅ hiện placeholder "cần sách giáo khoa" (không vỡ form) |
| Unit 17 Ex F (passage 10 chỗ – actuaries) | mở | ✅ render đúng |
| Unit 18 Ex A (nối tranh) | mở | ✅ placeholder |
| **Unit 18 Ex B (10 câu – câu THẬT sau khi sửa)** | điền 10 đáp án | ✅ **10/10 – 100%** |
| **Unit 18 Ex C (gộp C+C_cont, 12 câu circle)** | điền 12 đáp án | ✅ **12/12 – 100%** |
| Unit 18 Ex F (passage – Mr Thomas) | mở | ✅ render đúng, có list từ IN HOA |
| Unit 18 Ex G (matching→trắc nghiệm) | mở | ✅ 6 câu, mỗi câu 6 lựa chọn A–F |
| Unit 19 Ex C (viết câu) | mở | ✅ prompt hiển thị ("Tony wants to borrow… could") – **trước đây trống** |
| Unit 19 Ex D (should/ought to) | mở | ✅ có ô nhập – **trước đây hiện luôn đáp án** |
| **Unit 20 Ex A (trắc nghiệm A/B/C mảng)** | điền 8 đáp án | ✅ **8/8 – 100%** |
| Unit 20 Ex D (matching→trắc nghiệm, dùng lại lựa chọn) | mở | ✅ 8 câu render đúng |

## Lỗi phát hiện & sửa trong đợt test này

1. **`sentence_writing` không hiện đề** – renderer đọc `question.prompt` nhưng data để cue ở
   `question.sentence` → thêm fallback `prompt || sentence || stem` (Unit 19 Ex C, và các bài tương tự).
2. **Unit 19 Ex D hiện luôn đáp án** – bước vá trước ghi đè `sentence2` bằng đáp án đầy đủ →
   reset `sentence2 = "______"`, giữ `answer` là câu hoàn chỉnh.
3. **`sentence_transformation` / `sentence_rewrite` chấm sai** – đáp án kiểu `"should/ought to"`
   có dấu `/` (là 2 cách nói, không phải 2 đáp án) → chuyển sang **không chấm tự động**, chỉ
   "Xem đáp án" (giống `sentence_writing`).

## Trạng thái cuối

- Audit Unit 11–20: **38 → 3** (Unit 17 Ex E, Unit 18 Ex A — thiếu ảnh/câu gốc, để placeholder).
- Audit Unit 1–10: vẫn **2** (không hồi quy).
- 27 cảnh báo "answer not one of option keys" = **báo nhầm**, đã xác nhận trên UI (Unit 15 G,
  Unit 18 C, Unit 20 A đều 100% khi điền đúng).

## Files thay đổi (tổng cả 2 đợt)
```
public/exercises_v2.json
src/components/exercise/ExerciseBlock.jsx
src/components/exercise/QuestionItem.jsx
.gitignore
public/b1-units/Destination-B1-units{6-9,15-18}-extracted.json   (kết quả gpt-5.4-mini, tái dùng)
public/b1-units/_ocr-extract.js
```
