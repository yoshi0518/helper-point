import { ErrorTemplate } from '@/features/error/components/server/ErrorTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error | Helper Point',
};

const Page = () => <ErrorTemplate />;

export default Page;
