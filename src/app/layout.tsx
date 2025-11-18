import { RootLayout } from '@/shared/components/layout/server/RootLayout';
import { env } from '@/shared/libs/env';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '●●●',
  description: '●●●',
  keywords: ['●●●', '●●●', '●●●'],
  openGraph: {
    title: '●●●',
    description: '●●●',
    url: 'https://xxx.yoshi0518.com',
    siteName: '●●●',
  },
  robots: {
    index: !env.DEBUG, // falseでnoindex
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <RootLayout>{children}</RootLayout>;

export default Layout;
