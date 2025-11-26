'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/components/ui/button';
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import { menuItems } from '@/shared/constants';
import { env } from '@/shared/libs/env-client';
import { cn } from '@/shared/libs/utils';
import { useSidebarStore } from '@/shared/stores';

export const SidebarComponent = () => {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  if (env.DEBUG) {
    console.log('=== SidebarComponent ===');
    console.log('pathname', pathname);
    console.log('sidebarOpen', sidebarOpen);
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    // イベントリスナー追加
    window.addEventListener('keydown', handleEscape);

    // クリーンアップ
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    // 初回実行
    handleResize();

    // イベントリスナー追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={cn(
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'fixed top-0 left-0 z-50 h-screen w-56 flex-col bg-slate-800 text-gray-200 transition-all duration-300 md:flex md:translate-x-0',
        )}
      >
        <div className="z-50 border-b p-4 text-center font-extrabold text-lg text-white">お手伝いポイント</div>
        <ScrollArea className="h-[calc(100vh-60px)] bg-slate-800">
          <div className="space-y-2 p-3">
            {menuItems.map((menu) => {
              return pathname === menu.href ? (
                <Button
                  key={menu.href}
                  variant="ghost"
                  className="flex h-12 w-full items-center justify-start bg-blue-700 text-left hover:bg-blue-800 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <menu.icon />
                  {menu.label}
                </Button>
              ) : (
                <Button
                  key={menu.href}
                  variant="ghost"
                  className="flex h-12 w-full cursor-pointer items-center justify-start text-left hover:bg-gray-500 hover:text-white"
                  asChild
                >
                  <Link
                    href={menu.href}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <menu.icon />
                    {menu.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </nav>
    </>
  );
};
