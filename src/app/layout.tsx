import { RootLayout } from '@/shared/components/layout/server/RootLayout';
import { env } from '@/shared/libs/env';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helper Point',
  description: '子供のお手伝い、景品交換の履歴を管理するアプリです。',
  keywords: ['Yoshi0518', 'Helper', 'Point', '子供', 'お手伝い', '景品'],
  openGraph: {
    title: 'Helper Point',
    description: '子供のお手伝い、景品交換の履歴を管理するアプリです。',
    url: 'https://helper-point.yoshi0518.com',
    siteName: 'Helper Point',
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
