'use client';

import { Plus } from 'lucide-react';

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

type SettingsChildAddComponentProps = {
  isOpenAdd: boolean;
  setIsOpenAdd: (isOpenAdd: boolean) => void;
};

export const SettingsChildAddComponent = ({ isOpenAdd, setIsOpenAdd }: SettingsChildAddComponentProps) => {
  const { isMobile } = useResponsiveStore();

  if (env.DEBUG) {
    console.log('=== SettingsChildAddComponent ===');
    console.log('isMobile', isMobile);
  }

  return isMobile ? (
    <Drawer
      open={isOpenAdd}
      onOpenChange={setIsOpenAdd}
    >
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="h-8 gap-1.5 bg-blue-600 text-white text-xs hover:bg-blue-700 hover:text-white"
        >
          <Plus className="h-4 w-4" />
          追加
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>追加</DrawerTitle>
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
      open={isOpenAdd}
      onOpenChange={setIsOpenAdd}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-8 gap-1.5 bg-blue-600 text-white text-xs hover:bg-blue-700 hover:text-white"
        >
          <Plus className="h-4 w-4" />
          追加
        </Button>
      </DialogTrigger>
      <DialogContent className="hidden md:block">
        <DialogHeader>
          <DialogTitle>追加</DialogTitle>
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
