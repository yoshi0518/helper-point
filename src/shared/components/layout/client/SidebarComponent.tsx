'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/components/ui/button';
import { menuItems } from '@/shared/constants';
import { env } from '@/shared/libs/env-client';

export const SidebarComponent = () => {
  const pathname = usePathname();

  if (env.DEBUG) {
    console.log('=== SidebarComponent ===');
    console.log('pathname', pathname);
  }

  return (
    <nav className="flex w-64 flex-col border-r bg-white">
      <div className="border-b p-4 text-center font-bold text-blue-800 text-lg">お手伝いポイント</div>
      <div className="space-y-2 p-3">
        {menuItems.map((menu) => {
          return pathname === menu.href ? (
            <Button
              key={menu.href}
              variant="ghost"
              className="flex h-12 w-full items-center justify-start bg-blue-100 text-left text-blue-800 hover:bg-blue-100"
            >
              <menu.icon />
              {menu.label}
            </Button>
          ) : (
            <Button
              key={menu.href}
              variant="ghost"
              className="flex h-12 w-full cursor-pointer items-center justify-start text-left hover:bg-gray-100"
              asChild
            >
              <Link href={menu.href}>
                <menu.icon />
                {menu.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
