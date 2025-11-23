import { NextResponse } from 'next/server';

import { UNAUTHENTICATED_MATCHER_LIST, UNAUTHENTICATED_PAGE_LIST } from '@/shared/constants';
import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env';

export const config = {
  matcher: UNAUTHENTICATED_MATCHER_LIST,
};

// export default auth;

export default auth((req) => {
  if (env.DEBUG) {
    console.log('=== middleware ===');
    console.log('req', req);
  }

  const { auth, nextUrl } = req;
  const isAuthenticated = !!auth;
  const isUnauthenticatedPage = UNAUTHENTICATED_PAGE_LIST.includes(nextUrl.pathname);

  // 認証不要なページの場合は何もしない
  if (isUnauthenticatedPage) {
    return;
  }

  // 認証が必要なページで未認証の場合はログインページにリダイレクト
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 認証済みの場合はリクエストを続行（何も返さない）
});
