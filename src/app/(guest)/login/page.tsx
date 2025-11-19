import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa6';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン | Helper Point',
};

export const Page = () => (
  <Card className="w-full max-w-md p-10 hover:shadow-md">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl text-blue-800">お手伝いポイント</CardTitle>
      <CardDescription className="text-sm">登録済Gmailアドレスでログインしてください。</CardDescription>
    </CardHeader>
    <CardContent>
      <Link href="/dashboard">
        <Button className="w-full cursor-pointer">
          <FaGoogle />
          ログイン
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default Page;
