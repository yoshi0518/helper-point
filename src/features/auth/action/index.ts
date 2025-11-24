'use server';

import { signIn, signOut } from '@/shared/libs/auth';

export const loginAction = async () => await signIn('google', { callbackUrl: '/' });

export const logoutAction = async () => await signOut({ redirectTo: '/logout' });
