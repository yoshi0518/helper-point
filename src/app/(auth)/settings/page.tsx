import { SettingsTemplate } from '@/features/settings/components/server/SettingsTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '設定 | Helper Point',
};

const Page = () => <SettingsTemplate />;

export default Page;
