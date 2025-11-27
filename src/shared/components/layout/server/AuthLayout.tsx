import { HeaderComponent } from '@/shared/components/layout/client/HeaderComponent';
import { SidebarComponent } from '@/shared/components/layout/client/SidebarComponent';
import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env-client';

export const AuthLayout = async ({
  children,
  notFound = false,
}: Readonly<{
  children: React.ReactNode;
  notFound?: boolean;
}>) => {
  const session = await auth();

  if (env.DEBUG) {
    console.log('=== AuthLayout ===');
    console.log('session', session);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SidebarComponent />
      <div className="flex w-full md:ml-56">
        <div className="flex w-full flex-col overflow-y-auto">
          <HeaderComponent
            name={session?.user?.name || ''}
            email={session?.user?.email || ''}
            image={session?.user?.image || ''}
            notFound={notFound}
          />
          <main className="flex-1">
            <div className="mx-auto flex max-w-6xl justify-center p-4 md:p-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};
