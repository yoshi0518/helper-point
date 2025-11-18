import { GoogleTagManager } from '@next/third-parties/google';
import { Noto_Sans_JP } from 'next/font/google';

import { env } from '@/shared/libs/env';

import '@/shared/styles/globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ja"
      className={notoSansJP.className}
    >
      <body>{children}</body>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
    </html>
  );
};
