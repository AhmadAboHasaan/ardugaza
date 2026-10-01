import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: 'storybook.spec.ts',
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:6006' },
  webServer: {
    command: 'node scripts/serve-storybook.mjs',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: true,
  },
  reporter: 'list',
});
