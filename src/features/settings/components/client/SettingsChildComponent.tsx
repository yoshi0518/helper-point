'use client';

import { useState } from 'react';

import { SettingsChildAddComponent } from '@/features/settings/components/client/SettingsChildAddComponent';
import { SettingsChildSearchComponent } from '@/features/settings/components/client/SettingsChildSearchComponent';
import { ButtonGroup } from '@/shared/components/ui/button-group';
import { Card, CardContent } from '@/shared/components/ui/card';
import { TabsContent } from '@/shared/components/ui/tabs';

export const SettingsChildComponent = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  return (
    <TabsContent
      value="child"
      className="space-y-1"
    >
      <div className="flex gap-0.5">
        <ButtonGroup>
          <SettingsChildSearchComponent
            isOpenSearch={isOpenSearch}
            setIsOpenSearch={setIsOpenSearch}
          />
          <SettingsChildAddComponent
            isOpenAdd={isOpenAdd}
            setIsOpenAdd={setIsOpenAdd}
          />
        </ButtonGroup>
      </div>
      <Card className="shadow-xs">
        <CardContent>
          <p>aaaa</p>
          <p>bbbb</p>
          <p>cccc</p>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
