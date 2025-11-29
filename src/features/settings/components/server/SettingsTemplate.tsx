import { SettingsChildComponent } from '../client/SettingsChildComponent';

import { Card, CardContent } from '@/shared/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

export const SettingsTemplate = async () => {
  return (
    <Tabs defaultValue="child">
      <TabsList className="grid w-full grid-cols-3 bg-slate-100">
        <TabsTrigger value="child">子供管理</TabsTrigger>
        <TabsTrigger value="tab2">お手伝い管理</TabsTrigger>
        <TabsTrigger value="tab3">景品管理</TabsTrigger>
      </TabsList>

      {/* 子供管理タブ */}
      <SettingsChildComponent />

      <TabsContent value="tab2">
        <div>Tab2</div>
        <Card>
          <CardContent>
            <p>dddd</p>
            <p>eeee</p>
            <p>ffff</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tab3">
        <div>Tab3</div>
        <Card>
          <CardContent>
            <p>gggg</p>
            <p>hhhh</p>
            <p>iiii</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
