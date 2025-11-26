import { PointsTemplate } from '@/features/points/components/server/PointsTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ポイント交換 | Helper Point',
};

const Page = () => <PointsTemplate />;

export default Page;
