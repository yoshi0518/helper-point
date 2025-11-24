import { HomeTemplate } from '@/features/home/components/server/HomeTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Helper Point',
};

const Page = () => <HomeTemplate />;

export default Page;
