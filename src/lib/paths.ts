/** Prefix for files served from /public when the site is deployed under a sub-path. */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
export const asset = (path: string) => `${basePath}${path}`;
