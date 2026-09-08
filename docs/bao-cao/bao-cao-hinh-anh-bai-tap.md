# Báo cáo: Hoàn thiện 8 bài tập ảnh (cắt hình từ PDF)

Ngày: 2026-09-07

## Bối cảnh

Sau đợt test Unit 1–42, có các bài tập không làm được vì phụ thuộc hình minh hoạ
trong sách (xem `bao-cao-reviews-va-tong-ket.md`). Đợt này cắt hình trực tiếp từ
`public/b1-units/Destination-B1.pdf` (254 trang) bằng PyMuPDF và gắn vào app.
Ban đầu làm 7 bài; sau bổ sung Unit 1 A (8 bài tổng).

## Cách làm

1. `py -m pip install pymupdf`.
2. Dò đúng trang PDF cho từng bài bằng **full-text search** (`page.get_text()`),
   KHÔNG dùng field `pdf_page` trong JSON — số này lệch so với index PDF thật
   (lệch tăng dần từ ~19 tới ~44 dọc theo sách).
3. Render vùng hình (clip rect, points) → JPEG grayscale ~175 DPI.
4. Lưu vào `public/b1-units/images/uXX-Y.jpg` (~748 KB tổng, phục vụ tại
   `/b1-units/images/uXX-Y.jpg`).
5. Thêm field `"image"` cho object bài tập trong `public/exercises_v2.json`
   (file app thực sự đọc — xem `src/hooks/useExercises.js`).
6. `src/components/exercise/ExerciseBlock.jsx`: render `exercise.image` thành
   `<figure>` giữa header và word bank; sửa `isDisplayOnly` để bài có ảnh không
   còn rơi vào ô xám "chưa có nội dung số hoá".

## 8 bài đã hoàn thiện

| Unit / Ex | Type | Ghi chú |
|---|---|---|
| Unit 1 A | sentence_writing | 6 hình thói quen của Helen. **Đã sắp lại thứ tự câu 1→6 theo số hình in trong sách + answer key** (thứ tự cũ theo hàng đọc trái→phải nên lệch: câu 2↔4, 3↔5) |
| Unit 17 D | sentence_writing | cây / chai / các bạn gái / các bạn trai |
| Unit 18 A | **picture_matching** | Dựng lại từ stub `word_box`/`items` (trước đó ra placeholder). Thêm `word_bank` + 8 câu "Picture N: ___". Đáp án: laboratory, screen, experiment, equipment, laptop, gadgets, software, hardware |
| Unit 26 F | gap_fill | rùa / bồ câu / vận động viên / gia đình (so sánh hơn – nhất) |
| Unit 32 D | picture_completion | 6 hình câu tường thuật (mệnh lệnh) |
| Unit 33 A | picture_matching | 7 hình động từ (fix/fold/tear/design/stretch/match/create) |
| Unit 35 C | picture_completion | 6 hình "I wish + past perfect" |
| Unit 42 D | **picture_matching** | Chuyển từ `matching`. Đáp án lưu dạng `"N / picture N"` để chấm được cả "2" lẫn "picture 2" |

## Kiểm tra trên trình duyệt

- Unit 1 A: ảnh 6 khung + câu 1→6 đúng thứ tự sách; "Xem đáp án" hiện câu mẫu đúng ✅
- Unit 33 A: ảnh + word bank + "Xem đáp án" hiện đủ 7 đáp án ✅
- Unit 18 A: hết placeholder, thành Picture Matching có ảnh ✅
- Unit 42 D: gõ "2" cho câu A ("Watch out!") → chấm đúng (1/8) ✅
- Unit 32 D: ảnh 6 khung + input "(Tidy your room!)" ✅
- Cả 8 file ảnh: HTTP 200, `image/jpeg` ✅

## File thay đổi

```
public/b1-units/images/*.jpg                      (mới, 7 file)
public/exercises_v2.json                          (thêm field image + sửa U18 A, U42 D)
src/components/exercise/ExerciseBlock.jsx         (render exercise.image, sửa isDisplayOnly)
```
