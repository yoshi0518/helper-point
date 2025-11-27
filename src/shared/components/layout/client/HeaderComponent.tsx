'use client';

import { BadgeAlert, LogOut, Menu } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { logoutAction } from '@/features/auth/action';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { menuItems } from '@/shared/constants';
import { env } from '@/shared/libs/env-client';
import { useSidebarStore } from '@/shared/stores';

type HeaderComponentProps = {
  name: string;
  email: string;
  image: string;
  notFound?: boolean;
};

export const HeaderComponent = ({ name, email, image, notFound = false }: HeaderComponentProps) => {
  const pathname = usePathname();
  const menu = menuItems.find((menu) => menu.href === pathname);
  const Icon = menu?.icon;
  const { toggleSidebarOpen } = useSidebarStore();

  if (env.DEBUG) {
    console.log('=== HeaderComponent ===');
    console.log('pathname', pathname);
    console.log('menu', menu);
    console.log('notFound', notFound);
  }

  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center gap-2 font-bold text-black">
        <Menu
          className="h-5 w-5 cursor-pointer md:hidden"
          onClick={toggleSidebarOpen}
        />
        {notFound && (
          <>
            <BadgeAlert className="h-5 w-5" />
            <span>Page Not Found</span>
          </>
        )}
        {Icon && <Icon className="h-5 w-5" />}
        <span>{menu?.label}</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={image}
            alt="user-image"
            width={32}
            height={32}
            className="cursor-pointer rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56"
          align="end"
          side="top"
          sideOffset={5}
        >
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuLabel className="font-normal text-xs">{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logoutAction}>
            <LogOut />
            ログアウト
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
