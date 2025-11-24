import { headers } from 'next/headers';
import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { env } from '@/shared/libs/env';

enum ErrorType {
  Configuration = 'Configuration',
  AccessDenied = 'AccessDenied',
  Verification = 'Verification',
  Default = 'Default',
}

const errorMap = {
  [ErrorType.Configuration]: {
    title: 'Configuration Error',
    description: '認証設定に不具合があります。',
  },
  [ErrorType.AccessDenied]: {
    title: 'Access Denied',
    description: 'アクセス権限がありません。',
  },
  [ErrorType.Verification]: {
    title: 'Verification Error',
    description: 'メールアドレス認証が完了していません。',
  },
  [ErrorType.Default]: {
    title: 'Unknown Error',
    description: '未知のエラーが発生しました。',
  },
};

export const ErrorTemplate = async () => {
  const params = new URLSearchParams((await headers()).get('x-search') ?? '');
  const errorType = params.get('error') as ErrorType;
  const error = errorMap[errorType] ?? errorMap[ErrorType.Default];

  if (env.DEBUG) {
    console.log('=== ErrorTemplate ===');
    console.log('x-href', (await headers()).get('x-href'));
    console.log('x-pathname', (await headers()).get('x-pathname'));
    console.log('x-search', (await headers()).get('x-search'));
    console.log('errorType', errorType);
    console.log('error', error);
  }

  return (
    <Card className="w-full max-w-md p-10 hover:shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-red-500">{error.title}</CardTitle>
        <CardDescription className="text-sm">{error.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/login">
          <Button className="w-full cursor-pointer">ログイン画面へ戻る</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
