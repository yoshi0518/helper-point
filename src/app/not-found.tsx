import { NotFoundTemplate } from '@/features/not-found/components/server/NotFoundTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found | Helper Point',
};

const Page = () => <NotFoundTemplate />;

export default Page;
