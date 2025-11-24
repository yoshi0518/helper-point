import { House, LogOut } from 'lucide-react';
import Image from 'next/image';

import { logoutAction } from '@/features/auth/action';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

type HeaderComponentProps = {
  name: string;
  email: string;
  image: string;
};

export const HeaderComponent = ({ name, email, image }: HeaderComponentProps) => (
  <header className="flex items-center justify-between bg-blue-500 px-4 py-2">
    <div className="flex items-center gap-2 font-bold text-white">
      <House className="h-5 w-5" />
      Home
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
