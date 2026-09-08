import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Chuẩn hóa từ thành public_id hợp lệ cho Cloudinary (chỉ chữ, số, gạch dưới)
function toPublicId(word) {
  return word
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export default async function handler(req, res) {
  try {
    const { word, keyword } = req.query;

    if (!word) {
      return res.status(400).json({ error: 'Missing word parameter' });
    }

    const publicId = `vocab/${toPublicId(word)}`;

    // 1. Kiểm tra ảnh đã tồn tại trong kho Cloudinary chưa
    try {
      const existing = await cloudinary.api.resource(publicId);
      return res.status(200).json({ url: existing.secure_url, cached: true });
    } catch (notFoundErr) {
      // Chưa có trong kho -> đi lấy mới từ Pixabay rồi upload
    }

    // 2. Gọi Pixabay lấy ảnh gốc
    const searchTerm = keyword || word;
    const pixabayUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=photo&per_page=3&safesearch=true`;

    const pixabayRes = await fetch(pixabayUrl);
    const pixabayData = await pixabayRes.json();

    if (!pixabayData.hits || pixabayData.hits.length === 0) {
      return res.status(404).json({ error: 'No image found on Pixabay' });
    }

    const sourceImageUrl = pixabayData.hits[0].webformatURL;

    // 3. Upload thật vào Cloudinary (lưu vĩnh viễn, không phải fetch tạm)
    const uploaded = await cloudinary.uploader.upload(sourceImageUrl, {
      public_id: publicId,
      overwrite: false,
      unique_filename: false,
      resource_type: 'image',
    });

    return res.status(200).json({ url: uploaded.secure_url, cached: false });
  } catch (error) {
    console.error('get-image error:', error);
    return res.status(500).json({ error: 'Internal server error', detail: error.message });
  }
}