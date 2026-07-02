export default async function handler(req, res) {
  const { q, image_type = 'photo', per_page = 3, safesearch = 'true' } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter q' });
  }

  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(q)}&image_type=${image_type}&per_page=${per_page}&safesearch=${safesearch}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Pixabay' });
  }
}