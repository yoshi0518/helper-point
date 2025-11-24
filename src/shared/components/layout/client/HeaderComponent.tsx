'use client';

import { LogOut } from 'lucide-react';
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

type HeaderComponentProps = {
  name: string;
  email: string;
  image: string;
};

export const HeaderComponent = ({ name, email, image }: HeaderComponentProps) => {
  const pathname = usePathname();
  const menu = menuItems.find((menu) => menu.href === pathname);
  const Icon = menu?.icon;

  if (env.DEBUG) {
    console.log('=== HeaderComponent ===');
    console.log('pathname', pathname);
    console.log('menu', menu);
  }

  return (
    <header className="flex items-center justify-between bg-blue-500 px-4 py-2">
      <div className="flex items-center gap-2 font-bold text-white">
        {Icon && <Icon className="h-5 w-5" />}
        {menu?.label}
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
