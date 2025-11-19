import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: 'https://helper-point.yoshi0518.com',
        },
      ],
    },
  ],
};

export default nextConfig;
