import { Gift, House, ListChecks } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

export const SidebarComponent = () => (
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
    </div>
  </nav>
);
