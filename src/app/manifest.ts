import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ardú',
    short_name: 'Ardú',
    description: 'A youth initiative in Gaza City. Not relief. A lifting.',
    start_url: '/',
    display: 'browser',
    background_color: '#f3efe4',
    theme_color: '#103634',
    icons: [
      { src: '/brand/icon-32.png', sizes: '32x32', type: 'image/png' },
      { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
