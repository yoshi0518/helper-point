'use client';

import { Search } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/components/ui/drawer';
import { env } from '@/shared/libs/env-client';
import { useResponsiveStore } from '@/shared/stores';

type SettingsChildSearchComponentProps = {
  isOpenSearch: boolean;
  setIsOpenSearch: (isOpenSearch: boolean) => void;
};

export const SettingsChildSearchComponent = ({ isOpenSearch, setIsOpenSearch }: SettingsChildSearchComponentProps) => {
  const { isMobile } = useResponsiveStore();

  if (env.DEBUG) {
    console.log('=== SettingsChildSearchComponent ===');
    console.log('isMobile', isMobile);
  }

  return isMobile ? (
    <Drawer
      open={isOpenSearch}
      onOpenChange={setIsOpenSearch}
    >
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="h-8 gap-1.5 text-xs"
        >
          <Search className="h-4 w-4" />
          検索
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>検索</DrawerTitle>
          <DrawerDescription>description</DrawerDescription>
        </DrawerHeader>
        <div>
          <p>aaaa</p>
          <p>bbbb</p>
          <p>cccc</p>
          <p>dddd</p>
          <p>eeee</p>
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog
      open={isOpenSearch}
      onOpenChange={setIsOpenSearch}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-8 gap-1.5 text-xs"
        >
          <Search className="h-4 w-4" />
          検索
        </Button>
      </DialogTrigger>
      <DialogContent className="hidden md:block">
        <DialogHeader>
          <DialogTitle>検索</DialogTitle>
          <DialogDescription>description</DialogDescription>
        </DialogHeader>
        <div>
          <p>aaaa</p>
          <p>bbbb</p>
          <p>cccc</p>
          <p>dddd</p>
          <p>eeee</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
