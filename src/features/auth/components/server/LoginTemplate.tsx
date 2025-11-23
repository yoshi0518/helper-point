import { LoginButtonComponent } from '@/features/auth/components/client/LoginButtonComponent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

export const LoginTemplate = () => (
  <Card className="w-full max-w-md p-10 hover:shadow-md">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl text-blue-800">お手伝いポイント</CardTitle>
      <CardDescription className="text-sm">登録済Gmailアドレスでログインしてください。</CardDescription>
    </CardHeader>
    <CardContent>
      <LoginButtonComponent />
    </CardContent>
  </Card>
);
