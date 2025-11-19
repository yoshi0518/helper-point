import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Helper Point',
    short_name: 'Helper Point',
    description: 'Helper Point',
    start_url: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#F9FAFB',
    icons: [
      { src: 'icon-64x64.png', sizes: '64x64', type: 'image/png' },
      { src: 'icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icon-256x256.png', sizes: '256x256', type: 'image/png' },
      { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
