'use client';

import { FaGoogle } from 'react-icons/fa6';

import { loginAction } from '@/features/auth/action';
import { Button } from '@/shared/components/ui/button';

export const LoginButtonComponent = () => (
  <Button
    className="w-full cursor-pointer"
    onClick={loginAction}
  >
    <FaGoogle />
    ログイン
  </Button>
);
