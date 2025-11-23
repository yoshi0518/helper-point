import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '@/shared/libs/env';

import type { Account, NextAuthConfig, Profile } from 'next-auth';

const authConfig: NextAuthConfig = {
  providers: [GoogleProvider],
  pages: {
    signIn: '/login',
    error: '/error',
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (env.DEBUG) {
        console.log('=== callbacks.jwt ===');
        console.log('token', token);
        console.log('user', user);
        console.log('account', account);
      }

      if (user && account?.id_token) {
        token.tokenType = account.token_type;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.provider = account.provider;
      }
      return token;
    },
    session: async ({ token, session }) => {
      if (env.DEBUG) {
        console.log('=== callbacks.session ===');
        console.log('token', token);
        console.log('session', session);
      }

      session.tokenType = token.tokenType as string;
      session.accessToken = token.accessToken as string;
      session.idToken = token.idToken as string;
      session.provider = token.provider as string;
      return session;
    },

    signIn: async ({
      account,
      profile,
    }: {
      account?: Account | null;
      profile?: Profile | undefined;
    }): Promise<boolean> => {
      if (env.DEBUG) {
        console.log('=== callbacks.signIn ===');
        console.log('account', account);
        console.log('profile', profile);
      }

      if (account?.provider !== 'google') return false;
      return !!(profile?.email_verified && env.AUTH_MAIL_LIST.split(',').includes(profile?.email as string));
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
