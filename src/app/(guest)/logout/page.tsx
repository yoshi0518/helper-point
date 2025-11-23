import { LogoutTemplate } from '@/features/auth/components/server/LogoutTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログアウト | Helper Point',
};

export const Page = () => <LogoutTemplate />;

export default Page;
