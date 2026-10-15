import type { NextConfig } from 'next';
/**
 * Static export. NEXT_PUBLIC_BASE_PATH is set only by the GitHub Pages workflow while the
 * site lives under a repository path (/ardu); it is empty on a custom domain and on Cloudflare.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
const config: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default config;
