import { Gift, House, ListChecks, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';

import { Avatar } from '@/shared/components/ui/avatar';
import { Button } from '@/shared/components/ui/button';
import { auth } from '@/shared/libs/auth';
import { env } from '@/shared/libs/env';

export const HomeTemplate = async () => {
  const session = await auth();

  if (env.DEBUG) {
    console.log('=== HomeTemplate ===');
    console.log('session', session);
  }

  return (
    <div className="flex w-full">
      <nav className="flex w-64 flex-col border-r bg-white">
        <div className="border-b p-4 text-center font-bold text-blue-800 text-lg">お手伝いポイント</div>
        <div className="space-y-2 p-3">
          <Button
            variant="ghost"
            className="flex h-12 w-full cursor-pointer items-center justify-start bg-blue-100 text-left text-blue-800"
          >
            <House />
            Home
          </Button>
          <Button
            variant="ghost"
            className="flex h-12 w-full cursor-pointer items-center justify-start text-left hover:bg-gray-100"
          >
            <ListChecks />
            お手伝い登録
          </Button>
          <Button
            variant="ghost"
            className="flex h-12 w-full cursor-pointer items-center justify-start text-left hover:bg-gray-100"
          >
            <Gift />
            ポイント交換
          </Button>
          <Link href="/logout">
            <Button
              variant="ghost"
              className="flex h-12 w-full cursor-pointer items-center justify-start text-left hover:bg-gray-100"
            >
              <LogOut />
              ログアウト
            </Button>
          </Link>
        </div>
      </nav>
      <main className="w-full">
        <div className="flex items-center justify-between bg-blue-500 px-4 py-2">
          <div className="flex items-center gap-2 font-bold text-white">
            <House className="h-5 w-5" />
            Home
          </div>
          <div className="">
            <Avatar className="flex items-center justify-center border border-white">
              <Settings className="h-6 w-6 text-white" />
            </Avatar>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">メインコンテンツ</div>
      </main>
    </div>
  );
};
