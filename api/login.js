export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { password } = req.body || {};

  if (password !== process.env.SITE_PASSWORD) {
    return res.status(401).json({ error: 'Sai mật khẩu' });
  }
  res.setHeader(
    'Set-Cookie',
    `site_access=${process.env.SITE_ACCESS_TOKEN}; Path=/; Max-Age=${60 * 60 * 24 * 1}; HttpOnly; Secure; SameSite=Lax`
  );
  return res.status(200).json({ success: true });
}