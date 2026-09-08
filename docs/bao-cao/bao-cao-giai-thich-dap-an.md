# Báo cáo: Giải thích đáp án từng câu (nút "Vì sao?")

Ngày: 2026-09-07

## Mục tiêu

Thêm nút **"Vì sao?"** dưới mỗi câu bài tập, mở ra 1–2 câu giải thích tiếng Việt
theo khuôn: **dấu hiệu trong câu → điểm ngữ pháp / quy tắc → dạng đúng** (bài từ
vựng thì giải thích nghĩa / collocation / hậu tố).

## Kiến trúc

| Thành phần | Vai trò |
|---|---|
| `public/explanations.json` | Kho giải thích. Khoá: `unit → chữ cái bài → id câu` (id là chuỗi). |
| `src/hooks/useExplanations.js` | Nạp `/explanations.json` 1 lần, cache, lỗi → `{}` (không vỡ app). |
| `src/components/exercise/ExplanationToggle.jsx` | Component nút bung/thu dùng chung. |
| `src/pages/ExerciseUnitPage.jsx` | Lấy `explanations[unitName][exerciseLetter]` truyền xuống. |
| `src/components/exercise/ExerciseBlock.jsx` | Rẽ giải thích theo id câu vào `QuestionItem`; với bài dạng đoạn văn (gap-passage / circle-passage) render danh sách `PassageExplanations` bên dưới. |
| `src/components/exercise/QuestionItem.jsx` | Chèn `explBlock` sau `answerReveal` ở mọi nhánh render. |

Nút hiện **luôn** (không khoá sau "Xem đáp án") — muốn khoá thì sửa 1 điều kiện.

## Quy trình sinh

- **Unit 1–3**: viết tay (150 giải thích) làm chuẩn chất lượng.
- **Unit 4–42 + 16 Review + 2 Progress Test**: script `gen-expl.mjs` gọi `gpt-5.4-mini`
  (332 lượt, ~210k token vào / ~90k token ra, chi phí ~vài chục cent theo mức của
  pipeline OCR trước). Mỗi bài 1 lượt gọi, trả JSON `{id: giải thích}`.
- **Rà tay từng unit** trước khi merge: chuẩn hoá nháy cong → thẳng, bỏ markdown `**`,
  bỏ ký tự lạ (đã sửa ~5 chỗ dính chữ Armenia/Ả Rập/Devanagari), sửa lỗi factual
  (vd U6 A1 nhầm "go"→"pass"; U9 G6 nhầm "began"; U36 D map sai phrasal verb;
  PT2 J8 diễn đạt lại "be made to V").
- Bỏ hẳn: **Unit 17 E** (tick_cross — OCR không tách được câu, giải thích quá chung),
  **Review 11 A#10** (câu OCR mâu thuẫn: "perfect ___ the summer" đáp án "off").
- Crossword (4 bài) bỏ qua vì không có ô câu riêng để gắn nút.

## Kết quả

- **2.800 giải thích / 58 unit / 363 bài tập.**
- Bao phủ **99,3%** câu có đáp án (2.798/2.817). Phần còn thiếu = Unit 17 E +
  Units 7,8,9 Ex A (đều cố ý bỏ vì OCR hỏng).
- `explanations.json` JSON hợp lệ, không còn ký tự lạ / markdown / brace thừa.

## Rà soát sâu — ĐÃ XONG cả 9 giai đoạn

Đọc kỹ lại từng giải thích của cả sách. Nháp AI giữ vững chất lượng dưới soát kỹ;
tổng cộng chỉ phải chỉnh:

| Giai đoạn | Sửa |
|---|---|
| 1 (U1–5) | không (Unit 1–3 viết tay) |
| 2 (U6–10) | Unit 8 E6 (bỏ "at the future"), Unit 6 H2, Unit 10 F7 (từ ngữ) |
| 3–5 (U11–25) | không có lỗi |
| 6 (U26–30) | Unit 26 A2 (từ "-ter" → "gấp đôi phụ âm + -er") |
| 7 (U31–35) | không có lỗi |
| 8 (U36–42) | Unit 40 E3, E5 (viết lại phần "unless" bị ngược logic) |
| 9 (Review + PT) | Bỏ **Units 7,8,9 Ex A** — nguồn OCR trùng câu, đáp án mâu thuẫn nhau |

Quét tự động cuối cùng: 0 ký tự lạ, 0 markdown, 0 brace thừa trên 2.800 mục.
