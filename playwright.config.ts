import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testIgnore: '**/storybook.spec.ts',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:3000', trace: 'retain-on-failure' },
  webServer: {
    command: 'pnpm start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true,
    timeout: 120000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.005 } },
});
