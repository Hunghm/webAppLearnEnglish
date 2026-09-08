# Review sections + TỔNG KẾT toàn bộ Destination B1

## Phần Review vừa làm

Audit các Review: **0 lỗi thực.**
8 phần Review trước đây trống hoàn toàn (~43 bài tập) nay đã đủ:

| Phần | Bài | Đối chiếu answer key |
|---|---|---|
| Units 4, 5 và 6 (Review 2) | A–E | ✅ khớp 100% |
| Units 7, 8 và 9 (Review 3) | A–E | ✅ khớp 100% |
| Units 13, 14 và 15 (Review 5) | A–E | ✅ (sửa Ex E Q8) |
| Units 16, 17 và 18 (Review 6) | A–E | ✅ (dựng lại Ex E cloze) |
| Units 22, 23 và 24 (Review 8) | A–E | ✅ (sửa Ex A Q3) |
| Units 31, 32 và 33 (Review 11) | A–E | ✅ (sửa Ex A Q10, Ex C Q5) |
| Units 40, 41 và 42 (Review 14) | A–C | ✅ khớp 100% |
| **Units 22–42 (Progress Test 2)** | A–J (90 câu) | ⚠ **key in trong PDF bị cắt cụt** (chỉ có 1C 2C 3D 4A) → đáp án do gpt-5.4-mini suy ra; 4 câu đầu khớp key + kiểm tra ngữ pháp thấy hợp lý. Đã ghi `_source` là "unverified". |

Sửa thêm:
- **Units 4,5,6 Ex E** & **Units 16,17,18 Ex E**: model dồn cả passage vào từng câu → dựng lại
  thành passage (Ex E R2) / cloze có passage ở đề (Ex E R6).
- Bỏ các exercise trùng (`C_cont`, trang bị lặp) trong review.
- `matching` trong Review 8/11 + Progress Test → chuyển sang trắc nghiệm.

### Test browser
- Units 4,5,6 Review Ex A (word bank) → điền đúng → XANH ✅
- Units 4,5,6 Review Ex E (passage 10 chỗ) → render đúng ✅
- Units 22–42 Progress Test Ex A → 8 câu MC, đề + 4 lựa chọn, ngữ pháp đúng ✅

*(Dev server `localhost:5173` bị tắt giữa chừng — mình đã khởi động lại để test.)*

---

## TỔNG KẾT toàn bộ sách (Unit 1–42 + 16 Review)

**368/375 bài tập đã có đủ câu hỏi + đáp án. Chỉ còn 3 placeholder + 4 crossword.**

| Phạm vi | Lỗi thực còn lại |
|---|---|
| Unit 1–10 | Unit 10 Ex D (viết tự do – đúng thiết kế) |
| Unit 11–20 | Unit 17 Ex E (tick_cross – OCR không tách được câu), Unit 18 Ex A (nối tranh – cần ảnh) |
| Unit 21–30 | – |
| Unit 31–42 | Unit 42 Ex D (nối tranh – cần ảnh) |
| 16 Review | – (Progress Test 2 đáp án AI-derived do PDF thiếu key) |

### Bug code đã sửa (áp dụng toàn sách)
- Chấm sai câu nhiều ô trống (`/` vs ` / `)
- `options` dạng chuỗi/mảng → `normalizeOptions()`
- `matching` → tự chuyển thành trắc nghiệm (script `convert-matching`)
- Bài rỗng → placeholder gọn thay vì form vỡ
- `sentence_writing`/`sentence_transformation`/`sentence_rewrite` → không chấm tự động
- `sentence_writing` đọc `prompt || sentence`
- circle passage, key_word_transform renderer, anagram + câu ngữ cảnh
- crossword `html` rỗng → placeholder
- TYPE_META cho các type lạ
- "extra word" bỏ ghi chú trong ngoặc khi chấm

### Files
```
public/exercises_v2.json                     (dữ liệu – app dev đọc file này)
src/components/exercise/ExerciseBlock.jsx
src/components/exercise/QuestionItem.jsx
.gitignore                                   (chặn *.evn API key, PDF, OCR .txt lớn)
public/b1-units/Destination-B1-*-extracted.json   (kết quả gpt-5.4-mini, tái dùng)
public/b1-units/_ocr-extract.js              (script chạy lại)
public/b1-units/Destination-B1-ocr-*.txt     (OCR toàn sách – đã gitignore)
```
Tổng chi phí OpenAI gpt-5.4-mini cho cả dự án: **~10 cent**.

⚠️ **Nhắc lại bảo mật:** `public/b1-units/openai api/.evn` chứa API key — đã thêm vào `.gitignore`
nhưng nếu từng `git push` file này thì nên thu hồi key.

`dist/` là build cũ — chạy `npm run build` khi deploy.
