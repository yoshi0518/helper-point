import { LoginTemplate } from '@/features/auth/components/server/LoginTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン | Helper Point',
};

export const Page = () => <LoginTemplate />;

export default Page;
