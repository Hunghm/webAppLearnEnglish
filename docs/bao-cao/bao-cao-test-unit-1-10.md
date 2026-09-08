# Báo cáo test UI – Exercises Unit 1 → 10

Nguồn dữ liệu: `public/exercises_v2.json` (app fetch `/exercises_v2.json`)
Phạm vi: 67 bài tập / ~518 câu thuộc "Unit 1".."Unit 10".
Cách test: mô phỏng lại đúng logic chấm điểm (`ExerciseBlock.computeScore`) + logic render
(`QuestionItem`, `SentenceRenderer`) rồi tự điền đáp án chuẩn, cộng với kiểm tra trực tiếp
trên `http://localhost:5173` bằng trình duyệt thật.

Kết luận nhanh: **có rất nhiều lỗi**. Nặng nhất là Unit 7, 8, 9 gần như không dùng được,
và một lỗi chấm điểm khiến nhiều câu điền ĐÚNG vẫn bị báo SAI.

---

## A. NẶNG – Cả bài tập không có đáp án (24 bài)

Câu hỏi trong JSON chỉ là `{"num": 1}` – không có đề bài, không có lựa chọn, không có `answer`.
Trên UI chỉ hiện số thứ tự + ô nhập trống trơn. Nút **"Kiểm tra"** luôn ra 0/0,
**"Xem đáp án"** không hiện gì. Người học không thể làm.

| Unit | Bài | Loại | Số câu |
|---|---|---|---|
| Unit 6 | F | word_formation | 10 |
| Unit 6 | G | gap_fill | 6 |
| Unit 6 | H | key_word_transformation | 6 |
| Unit 7 | A B C D E F | **toàn bộ 6 bài** | 6/8/8/4/10/6 |
| Unit 8 | A B C D E F | **toàn bộ 6 bài** | 8/8/8/10/8/11 |
| Unit 9 | A B C D E F G H | **toàn bộ 8 bài** | 12/6/6/8/8/6/10/6 |
| Unit 10 | D | sentence_writing | 6 |

→ Unit 7, 8, 9 coi như hỏng hoàn toàn (đã xác nhận trực tiếp trên UI: Unit 7 Ex A = 6 ô
textarea rỗng chỉ có số; Ex B = 8 ô input nhỏ không có đề).

Ngoài ra khi `questions.length > 0` nhưng rỗng, app **không** rơi vào nhánh "cần sách giáo khoa"
(`isDisplayOnly`), nên hiện form hỏng thay vì thông báo.

---

## B. NẶNG – Chấm SAI đáp án đúng: câu nhiều chỗ trống dùng `"/"` thay vì `" / "`

`computeScore` tách đáp án nhiều ô trống bằng `" / "` (có dấu cách 2 bên):
```js
const correctParts = correctAns.split(' / ')
```
Nhưng dữ liệu ghi bằng `"/"` (không cách). Hệ quả: chỉ ô trống đầu được so, ô còn lại
không bao giờ khớp → **điền đúng vẫn báo đỏ**.

| Unit | Bài | Câu | Đáp án trong data | Đúng phải là |
|---|---|---|---|---|
| Unit 1 | E | Q2 | `Are/watching` | Are … watching |
| Unit 1 | E | Q6 | `Do/have` | Do … have |
| Unit 2 | C | Q2 | `was sleeping/was listening` | |
| Unit 2 | C | Q4 | `was working/was leaving` | |
| Unit 2 | C | Q5 | `Were/having` | |
| Unit 2 | C | Q7 | `was/going` | |
| Unit 2 | F | Q2 | `Did/use to` | |
| Unit 2 | F | Q5 | `Did/use to` | |
| Unit 6 | A | Q10 | `made/progress` | |

**Đã xác nhận trên UI**: Unit 1 → tab E → điền Q2 = "Are" + "watching" (đúng như đề định)
→ bấm "Kiểm tra" → ô báo **ĐỎ (sai)**. Trong khi Q1 "move" báo xanh đúng.

Sửa: đổi `"/"` → `" / "` trong data cho các câu này, HOẶC cho `computeScore` tách cả `"/"`.

---

## C. NẶNG – Câu 2 chỗ trống nhưng đáp án chỉ có 1 phần → ô thứ 2 không thể đúng → cả câu luôn sai (8 câu)

Bài gap-fill trong sách đánh số `(1) (2) (3)…`; khi convert sang JSON nhiều gap bị gộp vào
1 object câu hỏi nhưng chỉ lưu 1 đáp án. `QuestionItem` render đủ số ô `______` nhưng
`correctAnswers` chỉ có 1 phần tử → `isCorrect` yêu cầu tất cả ô đúng → không bao giờ đạt.

| Unit | Bài | Câu | Đề (rút gọn) | Data có | Thiếu |
|---|---|---|---|---|---|
| Unit 2 | E | Q2 | "The sun (2)___ and the birds (3)___" | `was shining` | were singing |
| Unit 2 | E | Q5 | "…where her father (6)___ breakfast" | `went` | was having/had |
| Unit 2 | E | Q9 | "…(10)___ the fridge" | `put` | opened |
| Unit 2 | E | Q11 | "…the phone (12)___" | `was getting` | rang |
| Unit 3 | B | Q1 | "dream of (1)___ … or (2)___ a top tennis player" | `scoring` | being |
| Unit 3 | B | Q3 | "(3)___ most young people … (4)___ at the same time" | `interests` | have fun |
| Unit 3 | H | Q1 | 2 chỗ trống | `with` | (thiếu 1) |
| Unit 4 | D | Q4 | "(4)___ … (5)___ out at all" | `I've just been sitting` | haven't gone |

---

## D. NẶNG – multiple_choice bị hỏng render lựa chọn (14 câu)

### D1. `options` là chuỗi → mỗi ký tự thành 1 nút — Unit 9 Ex B (6 câu)
```json
"options": "ferry/traffic"
```
`Object.entries("ferry/traffic")` duyệt từng ký tự → UI hiện nút `0. f  1. e  2. r  3. r  4. y  5. /  6. t …`
**Đã xác nhận trên UI.** Toàn bộ 6 câu: `crowded/nearby`, `cruise/coach`, `convenient/foreign`,
`passport/public transport`, `resort/trip`.

### D2. `options` là mảng → nút đánh số 0/1/2 thay vì A/B/C — Unit 7 Ex F (6 câu)
```json
"options": ["A We'll go", "B We're going", "C We go"]
```
`Object.entries(array)` → key = "0","1","2". Thêm nữa không có `answer` (thuộc mục A).

### D3. type `multiple_choice` nhưng KHÔNG có `options`, chỉ có `sentence` chứa "x / y"
Rơi vào nhánh mặc định → hiện cả câu + 1 ô nhập, đáng lẽ là chọn 1 trong 2.
- Unit 7 Ex E (10 câu) – "Oscar says he **is doing / will do** the washing-up…"
- Unit 8 Ex E (8 câu) – "I'm meeting Andy **at / on** the cinema…"

---

## E. TRUNG BÌNH – type `matching` không có renderer

- **Unit 9 Ex D** (`matching`, 8 câu): app không có UI riêng cho `matching` → rơi vào
  `fill_in_blank` mặc định → 8 ô trống rỗng, không có gì để nối.

---

## F. TRUNG BÌNH – `rewrite`: kiểu đáp án không nhất quán / không gõ được

### F1. Unit 1 Ex C — lẫn lộn "cả câu" và "mảnh sửa" + mất chữ in đậm
Đề: "Rewrite correctly. Change the words or phrases **in bold**" — nhưng in đậm bị mất khi
lưu JSON, người học không biết phải đổi từ nào. Đáp án lẫn lộn:
- Q1 = cả câu `"Do top musicians study for many years?"`
- Q2 = mảnh `"aren't touching"`, Q3 = `"does"`, Q8 = `"enjoy"`
- Q4/Q5/Q6 = cả câu

UI render: cả câu gốc + 1 ô nhập nhỏ. Chấm yêu cầu gõ khớp tuyệt đối → gần như luôn sai.
**Đã xác nhận trên UI.**

### F2. Unit 5 Ex F — đáp án là chú thích, không phải nội dung gõ
Đáp án các câu: `"had (extra word)"`, `"correct"`, `"been (extra word)"`, `"yet (extra word)"`…
Đây là bài "tìm từ thừa" bị gán nhầm type `rewrite`. Muốn đúng phải gõ đúng chuỗi
`"had (extra word)"` → phi lý.

### F3. Unit 10 Ex A — lẫn lộn từ đơn và cụm
`"given"`, `"delivered"`, `"told"`, `"isn't"`, `"Was your money stolen"`, `"be"`, `"Will I be"`.

*(Unit 3 Ex I rewrite thì OK – toàn giới từ đơn, nhất quán.)*

---

## G. TRUNG BÌNH – `sentence_writing` về bản chất không tự chấm được

Người học tự viết câu → gần như không khớp tuyệt đối đáp án mẫu → luôn báo sai.
Riêng khi đáp án mẫu chứa `"/"` thì **gõ đúng y hệt cũng báo sai** vì
`computeScore` tách `"/"` thành các phương án:
- **Unit 2 Ex B**: Q3 `"I was/went there two years ago"`, Q4 `"I did/finished it last night"`,
  Q6 `"I broke a/the window a week ago"` → điền đúng đáp án mẫu vẫn ra 3/6.

Đề nghị: bài `sentence_writing` chỉ nên "Xem đáp án", bỏ nút "Kiểm tra" hoặc không tính điểm.

---

## H. NHẸ – Crossword

- **Unit 6 Ex C** (`crossword`): field `html` = `""` → iframe `src=""` → hộp trống cao 900px.
- Unit 3 Ex A (`crossword`): `html = "/b1-units/unit3/crossword.html"` — có src, cần kiểm tra
  file tồn tại trong `public/`.

---

## I. NHẸ – Câu hỏi hiển thị thiếu chữ

- **Unit 1 Ex E Q5**: đề hiện `"Simon always ______ the washing-up after lunch?"` — thiếu
  `"Does"` ở đầu (đáp án `"Does/do"`). Chấm vẫn chạy (gõ "do"/"does" là đúng) nhưng câu
  đọc lên sai ngữ pháp.

---

## Tổng hợp mức độ

| Mức | Nhóm | Ảnh hưởng |
|---|---|---|
| 🔴 Nặng | A | 24 bài không có đáp án – Unit 7/8/9 hỏng hoàn toàn |
| 🔴 Nặng | B | 9 câu: điền đúng bị chấm sai (`/` vs ` / `) |
| 🔴 Nặng | C | 8 câu: ô trống thứ 2 không thể đúng |
| 🔴 Nặng | D | 14 câu multiple_choice hỏng nút lựa chọn |
| 🟠 TB | E | Unit 9 Ex D matching không có UI |
| 🟠 TB | F | 3 bài rewrite kiểu đáp án phi lý |
| 🟠 TB | G | sentence_writing không chấm được + Unit 2 Ex B sai |
| 🟡 Nhẹ | H, I | crossword rỗng, câu thiếu chữ |

## Gợi ý ưu tiên sửa

1. **Bổ sung đáp án** cho toàn bộ Unit 7, 8, 9 và Unit 6 F/G/H, Unit 10 D (nhóm A).
2. **Sửa `computeScore`**: cho tách cả `"/"` (không chỉ `" / "`) cho câu nhiều ô trống —
   xử lý được nhóm B ngay mà không phải sửa data.
3. **Chuẩn hoá `options`** của multiple_choice về dạng object `{"A": "...", ...}` (nhóm D).
4. Tách mỗi gap `(n)` thành 1 câu hỏi riêng có đáp án riêng (nhóm C).
5. Thêm renderer cho `matching`; với `sentence_writing` bỏ tính điểm tự động.
