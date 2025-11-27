import Link from 'next/link';

import { AuthLayout } from '@/shared/components/layout/server/AuthLayout';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

export const NotFoundTemplate = async () => (
  <AuthLayout notFound={true}>
    <Card className="w-full max-w-md p-10 hover:shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Page Not Found</CardTitle>
        <CardDescription className="text-sm">このURLに該当するページは存在しません。</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/">
          <Button className="w-full cursor-pointer">Homeへ戻る</Button>
        </Link>
      </CardContent>
    </Card>
  </AuthLayout>
);
