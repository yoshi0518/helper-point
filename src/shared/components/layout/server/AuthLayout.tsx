import { HeaderComponent } from '@/shared/components/layout/client/HeaderComponent';
import { SidebarComponent } from '@/shared/components/layout/client/SidebarComponent';
import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env';

export const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (env.DEBUG) {
    console.log('=== AuthLayout ===');
    console.log('session', session);
  }

  return (
    <div className="flex min-h-screen bg-blue-50">
      <SidebarComponent />
      <div className="flex w-full">
        <div className="w-full">
          <HeaderComponent
            name={session?.user?.name || ''}
            email={session?.user?.email || ''}
            image={session?.user?.image || ''}
          />
          <main className="mx-auto max-w-6xl">{children}</main>
        </div>
      </div>
    </div>
  );
};
