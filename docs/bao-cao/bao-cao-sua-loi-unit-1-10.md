# Đã sửa xong lỗi Exercises Unit 1–10

Kiểm tra ban đầu tìm ra ~46 lỗi. Sau khi sửa, bộ kiểm tra tự động chỉ còn **2 mục nhỏ không đáng kể**.

---

## 1. Sửa code (đã kiểm tra trực tiếp trên `localhost:5173`)

`src/components/exercise/ExerciseBlock.jsx` · `src/components/exercise/QuestionItem.jsx`

| Lỗi | Sửa | Kết quả trên UI |
|---|---|---|
| Chấm SAI câu điền đúng (câu nhiều ô trống: data dùng `/`, code tách ` / `) | `computeScore` + `QuestionItem` tách trên `/` có/không dấu cách | Unit 1 tab E: điền Q2 "Are"+"watching" → **XANH** (trước ĐỎ) |
| `options` là chuỗi `"a/b"` → nút mỗi ký tự (Unit 9 Ex B) | thêm `normalizeOptions()` xử lý chuỗi / mảng / object | Unit 9 Ex B: hiện đúng "A. ferry · B. traffic" |
| `options` là mảng `["A ...", "B ..."]` → nút 0/1/2 (Unit 7 Ex F) | như trên | nút A/B/C đúng |
| multiple_choice không `options`, câu có "x / y" | nhánh mới → nút chọn 2 phương án | Unit 7/8 Ex E render đúng |
| type `matching` không có UI (Unit 9 Ex D) | chuyển thành multiple_choice 8 lựa chọn A–H | Unit 9 Ex D chọn được, chấm được |
| Bài rỗng `{num:1}` → form vỡ | hiện "📖 chưa có nội dung số hoá" nếu không có gì render | — |
| Bài có câu nhưng không đáp án | render + ẩn "Kiểm tra", ghi chú "chưa có đáp án mẫu" | — |
| crossword `html` rỗng (Unit 6 Ex C) | → placeholder thay vì iframe trắng | — |
| sentence_writing tự chấm sai | bỏ auto-chấm, chỉ "Xem đáp án" + ghi chú | — |
| "extra word" (`"had (extra word)"`) chấm không nổi | bỏ ghi chú trong ngoặc khi so đáp án | Unit 5 Ex F chấm được |
| anagram/key_word_transformation thiếu ngữ cảnh | thêm hiển thị câu + chip từ khoá `[keyword]` | — |

## 2. Bổ sung nội dung từ sách gốc `Destination-B1.pdf`

Trích OCR (`pdftotext`) + đối chiếu bảng đáp án của sách, dùng **gpt-5.4-mini** căn chỉnh
OCR↔đáp án, sau đó **kiểm tra tay từng đáp án** so với answer key (đã phát hiện & sửa
3 chỗ model làm sai: Unit 8 Ex A Q8, Unit 8 Ex C Q3, Unit 9 Ex D Q4/Q8).

**23 bài tập trước đây trống hoàn toàn nay đã có đủ câu hỏi + đáp án:**
- Unit 6: Ex F, G, H
- Unit 7: Ex A, B, C, D (passage), E (options tường minh), F
- Unit 8: Ex A, B, C, D, E, F (passage "Jetlag")
- Unit 9: Ex A, B, C, D, E, F, G, H

**8 đáp án ô-trống-thứ-2 còn thiếu đã điền nốt từ answer key:**
- Unit 2 Ex E (Q2,5,9,11) · Unit 3 Ex B (Q1,3) · Unit 3 Ex H (Q1) · Unit 4 Ex D (Q4)

## 3. File OCR tái sử dụng (đã lưu vào `public/b1-units/`)

| File | Nội dung |
|---|---|
| `Destination-B1-ocr-plain.txt` | Toàn bộ sách, chế độ đọc theo dòng (tốt cho answer key) |
| `Destination-B1-ocr-layout.txt` | Toàn bộ sách, giữ layout (tốt cho câu hỏi) |
| `Destination-B1-answerkey-ocr.txt` | Riêng phần Answer Key |
| `Destination-B1-units6-9-extracted.json` | Kết quả gpt-5.4-mini có cấu trúc |
| `_ocr-extract.js` | Script tái chạy cho các unit khác |

Chi phí OpenAI: ~40k token gpt-5.4-mini ≈ **dưới 1 cent**.

## 4. ⚠️ Bảo mật – đã xử lý

File `public/b1-units/openai api/.evn` chứa **OpenAI API key** và **không** bị `.gitignore`
bắt (tên là `.evn`, không phải `.env`). Đã thêm vào `.gitignore`: `*.evn`, thư mục
`openai api/`, file PDF và các file OCR lớn. **Không commit key này** — nếu đã từng push, nên thu hồi key.

## 5. Còn lại (nhỏ, không chặn)

- **Unit 1 Ex C** (rewrite): đáp án lẫn "cả câu" và "mảnh sửa", mất chữ in đậm. Nội dung đúng, chỉ hơi khó đoán phải gõ gì — có "Xem đáp án" bù lại.
- **Unit 10 Ex D**: "Answer using your own ideas" — câu trả lời tự do, sách không có đáp án mẫu (đúng thiết kế).
- **Unit 11–42**: ngoài phạm vi yêu cầu; ~119 bài vẫn thiếu đáp án, có thể chạy lại `_ocr-extract.js` để bổ sung sau.

## Files đã đổi
```
src/components/exercise/ExerciseBlock.jsx
src/components/exercise/QuestionItem.jsx
public/exercises_v2.json          (dữ liệu bài tập – app dev đọc file này)
.gitignore
public/b1-units/*                 (OCR tái sử dụng, đã gitignore phần nặng/nhạy cảm)
```
`dist/` là bản build cũ – chạy `npm run build` để cập nhật khi deploy.
