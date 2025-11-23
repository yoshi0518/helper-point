export * from 'next-auth';

declare module 'next-auth' {
  interface Session {
    tokenType: string;
    accessToken: string;
    idToken: string;
    provider: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    tokenType: string;
    accessToken: string;
    idToken: string;
    provider: string;
  }
}
