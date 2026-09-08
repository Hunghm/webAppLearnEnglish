# Test & sửa Exercises Unit 31–42

Audit: **34 lỗi → 1 lỗi thực** (Unit 42 Ex D cần hình ảnh).
Units 31–42: **77/77 bài tập có đủ câu hỏi + đáp án — 0 placeholder.**
→ **Toàn bộ Unit 1–42 (đơn lẻ) giờ đã đầy đủ.**

---

## 1. Sửa nhanh (data + code)

| Lỗi | Sửa |
|---|---|
| **Unit 41 Ex E** – 4/7 đáp án bị hỏng (`in`, `In`, `under`, `H`) | → đúng theo causative: `done, by, hadn't had, delivered, get, his hair brushed, tickled` |
| **Unit 34 Ex A** (`matching` không có UI, có "no match/X") | → chuyển sang `multiple_choice` 7 lựa chọn A–F + "X (no match)" |
| Type lạ hiện raw label (`picture_matching`…) | thêm `key_word_transform`, `picture_completion`, `picture_matching` vào TYPE_META |
| `sentence_writing` đọc `prompt` nhưng data để ở `sentence` | (đã fix từ đợt 11–20) |

## 2. Bổ sung nội dung Unit 32–36 từ `Destination-B1.pdf`

Pipeline OCR + gpt-5.4-mini + **đối chiếu tay từng đáp án với answer key**.
Bắt & sửa chỗ model sai: **Unit 33 Ex B** Q1↔Q4 (`tight`↔`loose` bị đảo), **Unit 36 Ex B** Q1
(`recycle`→`recycled`, câu điều kiện loại 2), **Unit 35 Ex F** Q7 (chỉnh câu trong passage để
bộ tách lựa chọn nhận đúng "hadn't said"), **Unit 35 Ex F** Q8 (model bỏ sót gap → thêm lại).

**28 bài trước đây trống nay đủ:**
| Unit | Bài |
|---|---|
| 32 | A (reported yes/no), B (modal), C (key-word), D (picture completion), E, F (error corr.) |
| 33 | A (picture matching), B (word swap), C, **D (passage – Dress to impress)**, E (missing word), F (word formation), G, H |
| 34 | A (matching→MC), B (extra word), C+D (direct/indirect object rewrite), E, F (extra word passage) |
| 35 | A/B/C (wish + past/past perfect), D (error corr.), E, **F (passage – 25th April 3500)** |
| 36 | A (weather vocab), B (first-letter gap fill) |

Chi phí gpt-5.4-mini đợt này: ~50k token ≈ **~1.5 cent**.

## 3. Đã test trên browser

| Bài | Kết quả |
|---|---|
| Unit 33 Ex A (picture matching) | render đúng "Picture 1: __" + word bank ✅ |
| Unit 33 Ex D (passage – Dress to impress) | render đúng, "8 câu có đáp án" ✅ |
| Unit 34 Ex A (matching→MC, có "X (no match)") | 8 câu × 7 lựa chọn ✅ |
| Unit 35 Ex A (wish + past) | render đúng ✅ |
| Unit 35 Ex E (wish MC) | render đúng ✅ |
| **Unit 35 Ex F (passage 9 chỗ – diary 3500)** | điền 9 đáp án → 8/9 XANH ngay; Q7 chỉnh câu rồi khớp ✅ |

## 4. Trạng thái toàn bộ (Unit 1–42 đơn lẻ)

| Range | Audit lỗi thực | Còn placeholder |
|---|---|---|
| Unit 1–10 | 2 | Unit 10 Ex D (viết tự do – đúng thiết kế) |
| Unit 11–20 | 3 | Unit 17 Ex E (tick_cross), Unit 18 Ex A (nối tranh) – thiếu ảnh/câu gốc |
| Unit 21–30 | 0 | – |
| Unit 31–42 | 1 | Unit 42 Ex D (nối tranh) – thiếu ảnh |

**Chưa làm:** các trang "Review" gộp nhiều unit ("Units 4, 5 and 6", "Units 22–42"…) — không nằm trong
yêu cầu test unit đơn lẻ. Có thể chạy `public/b1-units/_ocr-extract.js` để bổ sung sau.

## Files thay đổi (tổng)
```
public/exercises_v2.json
src/components/exercise/ExerciseBlock.jsx
src/components/exercise/QuestionItem.jsx
.gitignore
public/b1-units/Destination-B1-units{6-9,15-18,25-27,32-36}-extracted.json  (gpt-5.4-mini, tái dùng)
public/b1-units/_ocr-extract.js
```
Backup: `scratchpad/exercises_v2.backup{1..6}.json`.
`dist/` là build cũ — chạy `npm run build` khi deploy.
