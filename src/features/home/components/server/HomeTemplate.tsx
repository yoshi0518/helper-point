import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env';

export const HomeTemplate = async () => {
  const session = await auth();

  if (env.DEBUG) {
    console.log('=== HomeTemplate ===');
    console.log('session', session);
  }

  return <div className="font-bold text-2xl">Helper Point</div>;
};
