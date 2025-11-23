import { DashboardTemplate } from '@/features/dashboard/components/server/DashboardTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Helper Point',
};

const Page = () => <DashboardTemplate />;

export default Page;
