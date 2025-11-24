'use client';

import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa6';

import { Button } from '@/shared/components/ui/button';

export const LoginButtonComponent = () => (
  <Button
    className="w-full cursor-pointer"
    onClick={() => signIn('google', { callbackUrl: '/' })}
  >
    <FaGoogle />
    ログイン
  </Button>
);
