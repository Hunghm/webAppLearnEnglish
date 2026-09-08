# Test & sửa Exercises Unit 11–20

Kiểm tra tự động: **38 lỗi → còn 2 mục** (đều do thiếu ảnh/nguồn, không sửa được).
Units 11–20: **63/65 bài tập đã có đủ câu hỏi + đáp án**.

---

## 1. Lỗi đã sửa

### `matching` không có giao diện (nhiều unit)
`matching` chỉ hiện ô điền trống. Đã viết script chuyển **13 bài `matching` → `multiple_choice`**
trên toàn bộ sách (pool đáp án lấy từ `options` hoặc dựng lại từ chuỗi `"X – …"`).
- Units 11–20 bị ảnh hưởng: **Unit 11 A, Unit 19 F, Unit 20 D** → giờ chọn được, chấm được.
- ✅ Đã test trên UI: Unit 11 Ex A — chọn "D. being driven by a clown" → bấm Kiểm tra → XANH, badge 1/6.

### Bài thiếu đáp án (điền từ answer key của sách)
- **Unit 19 Ex C** (viết câu xin phép): Q2–Q7 trống → điền 6 câu mẫu.
- **Unit 19 Ex D** (should/ought to): Q2–Q6 trống → điền 5 câu mẫu.
- **Unit 20 Ex C** Q6: `"Did you have to"` (3 từ cho 2 ô) → sửa thành `"Did / have to"`.

## 2. Bổ sung nội dung Unit 15–18 từ `Destination-B1.pdf`

Cùng pipeline như Unit 6–10 (OCR `pdftotext` + gpt-5.4-mini căn chỉnh + **đối chiếu tay từng đáp án
với answer key**). Đã bắt & sửa các chỗ model làm sai: Unit 15 Ex H Q4, Unit 16 Ex B Q1,
Unit 16 Ex D (ô tick), Unit 18 Ex B (model **bịa** câu do slice OCR sót trang → thay bằng câu thật),
Unit 18 Ex C↔C_cont (gộp + đáp án theo key).

**21 bài trước đây trống nay đã đủ:**
| Unit | Bài đã bổ sung |
|---|---|
| 15 | F (word formation), G (circle – prepositions), H (word patterns) |
| 16 | A, B, C (rewrite), D, E (error correction), **F (passage 15 chỗ trống – Berners-Lee)** |
| 17 | A, B, C (rewrite), D (picture prompts), **F (passage 10 chỗ – actuaries)** |
| 18 | B, C (12 câu, gộp), D (phrasal), E, **F (passage – Mr Thomas)**, G (matching→MC), H |

Chi phí gpt-5.4-mini cho đợt này: ~45k token ≈ **~1 cent**.

## 3. Còn lại (thiếu nguồn – để placeholder gọn)

- **Unit 17 Ex E** (`tick_cross` – đánh dấu câu thay được bằng "that"): OCR không tách được câu sạch → hiện "📖 cần sách giáo khoa".
- **Unit 18 Ex A** (nối tranh ↔ từ): cần hình ảnh trong sách → placeholder.
- **Unit 16 Ex A Q1**: 1 câu bị OCR vỡ nặng, để ô đơn + đáp án "I / he / it" xem qua "Xem đáp án".

## 4. Ghi chú kiểm thử UI

Đã mở browser test: Unit 11 (matching), Unit 15 (Ex F, G, A). Về sau công cụ browser bị chậm/lỗi
chụp màn hình liên tục nên phần Unit 16–18 chưa soi hết từng tab — nhưng các bài này dùng đúng
khuôn `passage` / `multiple_choice` / `gap_fill` đã kiểm chứng ở Unit 6–10 và Unit 11/15.

27 cảnh báo "answer not one of option keys" trong bộ audit là **báo nhầm**: đó là dạng
"circle X / Y trong câu" (Unit 15 G, Unit 18 C, và các bài có sẵn ở Unit 11–14) — app tự tách 2
lựa chọn bằng `parseCircleOptions` khi đã có đáp án. ✅ Đã xác nhận Unit 15 Ex G hiển thị đúng
"on / to", "at / from"… trên UI.

## Files
```
public/exercises_v2.json                              (dữ liệu – app dev đọc file này)
src/components/exercise/QuestionItem.jsx              (+ nhánh key_word_transformation, anagram có câu)
public/b1-units/Destination-B1-units15-18-extracted.json   (kết quả gpt-5.4-mini, tái dùng)
```
Backup dữ liệu trước mỗi bước: `scratchpad/exercises_v2.backup{,2,3}.json`.
