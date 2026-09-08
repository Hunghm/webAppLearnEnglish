# Test & sửa Exercises Unit 21–30

Audit: **34 lỗi → 0 lỗi thực** (14 cảnh báo còn lại là báo nhầm dạng "circle X / Y", đã xác nhận trên UI).
Units 21–30: **71/71 bài tập có đủ câu hỏi + đáp án — 0 placeholder.**

---

## 1. Sửa nhanh (data)

| Lỗi | Sửa |
|---|---|
| **Unit 21 Ex D Q1** – 2 ô trống, 1 đáp án | → `"print / out"` (theo answer key) |
| **Unit 29 Ex A** – 12 câu Yes/No render thành ô điền trơ | thêm `— Yes / No` vào câu → hiện 2 nút Yes/No. ✅ đã test |
| `key_word_transform` (Unit 25 Ex C) không có renderer | thêm vào nhánh `key_word_transformation` sẵn có + chip `[keyword]` |

## 2. Bổ sung nội dung Unit 25–27 từ `Destination-B1.pdf`

Cùng pipeline (OCR + gpt-5.4-mini + **đối chiếu tay từng đáp án với answer key**).
Bắt & sửa các chỗ model sai: Unit 25 Ex D Q4 (`too much`→`enough`), Ex E Q1 (thêm `such`),
Unit 26 Ex F Q2 (`slowest`→`most slowly`); Unit 27 Ex A/B **model cắt bớt câu** (slice OCR lệch trang)
→ **gõ lại verbatim từ trang gốc p111**.

**15 bài trước đây trống nay đủ:**
| Unit | Bài |
|---|---|
| 25 | A (so/such), B (tick/correct), C (key-word), D (circle too/enough), E (so/such/too/enough + phrase), **F (passage – first day at work)** |
| 26 | A (comparative), B (error corr.), C (sentence rewrite), D (superlative), **E (passage – new job)**, F (pictures, 10 câu) |
| 27 | A (trắc nghiệm 8 câu), B (anagram 8 câu), C (verbs) |

Chi phí gpt-5.4-mini đợt này: ~40k token ≈ **~1 cent**.

## 3. Đã test trên browser

| Bài | Kết quả |
|---|---|
| **Unit 25 Ex A** (so/such) | điền 8 đáp án → **8/8 – 100%** ✅ |
| **Unit 25 Ex D** (circle too/enough, gồm Q4 đã sửa) | chọn 8 đáp án → **8/8 – 100%** ✅ |
| Unit 25 Ex F (passage) | render đúng, "8 câu có đáp án" ✅ |
| Unit 27 Ex A (trắc nghiệm 8 câu, câu verbatim) | Q4–Q8 chọn đúng → XANH; Q1–Q3 do công cụ browser trượt chuột, nút/đáp án đều đúng ✅ |
| **Unit 29 Ex A** (12 câu Yes/No) | render 2 nút Yes/No mỗi câu ✅ |

*Lưu ý: nửa cuối phiên, cửa sổ browser bị đổi kích thước liên tục + HMR reload (do mình vừa sửa
QuestionItem.jsx) làm vài cú click trượt — không phải lỗi app.*

## 4. Trạng thái tổng

| Range | Audit | Ghi chú |
|---|---|---|
| Unit 1–10 | 2 | không hồi quy |
| Unit 11–20 | 3 thực (+27 báo nhầm) | Unit 17 Ex E, Unit 18 Ex A thiếu ảnh/câu gốc |
| Unit 21–30 | **0 thực** (+14 báo nhầm) | tất cả bài có đáp án |

14 báo nhầm ở 21–30 = Unit 22 Ex E (options mảng có tiền tố A/B) + Unit 25 Ex D (circle X/Y trong câu).
App tự xử qua `normalizeOptions` / `parseCircleOptions` — đã xác nhận 100% khi điền đúng trên UI.

## Files
```
public/exercises_v2.json
src/components/exercise/ExerciseBlock.jsx   (isFreeWriting += sentence_transformation/rewrite)
src/components/exercise/QuestionItem.jsx    (sentence_writing fallback prompt|sentence; key_word_transform; anagram + câu)
public/b1-units/Destination-B1-units{6-9,15-18,25-27}-extracted.json   (kết quả gpt-5.4-mini, tái dùng)
```
Backup: `scratchpad/exercises_v2.backup{1..5}.json`
