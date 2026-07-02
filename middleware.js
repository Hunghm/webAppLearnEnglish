export const config = {
    matcher: [
        '/((?!login|api/login|api/pixabay|assets|favicon.ico).*)',
    ],
};
export default function middleware(req) {
    const cookieHeader = req.headers.get('cookie') || '';
    const hasAccess = cookieHeader
        .split(';')
        .some((c) => c.trim() === `site_access=${process.env.SITE_ACCESS_TOKEN}`);
    if (hasAccess) {
        return; // undefined = cho qua bình thường
    }

    const loginUrl = new URL('/login', req.url);
    return Response.redirect(loginUrl, 307);
}