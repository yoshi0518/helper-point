import { Plus, Search } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { ButtonGroup } from '@/shared/components/ui/button-group';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

export const SettingsTemplate = async () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="grid w-full grid-cols-3 bg-slate-100">
        <TabsTrigger value="tab1">子供管理</TabsTrigger>
        <TabsTrigger value="tab2">お手伝い管理</TabsTrigger>
        <TabsTrigger value="tab3">景品管理</TabsTrigger>
      </TabsList>

      <TabsContent
        value="tab1"
        className="space-y-1"
      >
        <div className="flex gap-0.5">
          <ButtonGroup>
            <Button
              variant="outline"
              className="h-8 gap-1.5 text-xs"
            >
              <Search className="h-4 w-4" />
              検索
            </Button>
            <Button
              variant="outline"
              className="h-8 gap-1.5 bg-blue-600 text-white text-xs hover:bg-blue-700 hover:text-white"
            >
              <Plus className="h-4 w-4" />
              追加
            </Button>
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
