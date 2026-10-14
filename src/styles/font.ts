import localFont from 'next/font/local';
export const manrope = localFont({
  src: [
    {
      path: './fonts/manrope-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/manrope-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/manrope-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/manrope-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-manrope',
});
/** Bricolage Grotesque, the wordmark's face, for headlines and big figures. Variable weight axis only. */
export const bricolage = localFont({
  src: [
    {
      path: './fonts/bricolage-grotesque-latin-wght-normal.woff2',
      weight: '200 800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bricolage',
});
