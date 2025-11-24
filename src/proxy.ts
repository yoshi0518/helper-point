import { NextResponse } from 'next/server';

import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|[^?]*\\.(?:html?|css|js|json|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};

export default auth((req) => {
  const { nextUrl, auth, headers } = req;
  const isAuthenticated = !!auth;
  const isUnauthenticatedPage = ['/login', '/logout', '/error'].includes(nextUrl.pathname);

  if (env.DEBUG) {
    console.log('=== proxy ===');
    console.log('nextUrl', nextUrl);
    console.log('isAuthenticated', isAuthenticated);
    console.log('isUnauthenticatedPage', isUnauthenticatedPage);
  }

  // リクエストヘッダーへURLを追加
  const requestHeaders = new Headers(headers);
  requestHeaders.set('x-href', nextUrl.href);
  requestHeaders.set('x-pathname', nextUrl.pathname);
  requestHeaders.set('x-search', nextUrl.search);

  // ログイン済、かつログイン関連ページ => /
  if (isAuthenticated && isUnauthenticatedPage) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 未ログイン、かつログイン関連ページ以外 => /login
  if (!isAuthenticated && !isUnauthenticatedPage) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 上記以外
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});
