
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL: 'https://login.salesforce.com/',
    headless: false,
    trace: 'on-first-retry',
  },

 projects: [
  {
    name: 'setup',
    testMatch: '**/auth.setup.ts',
  },
  {
    name: 'chromium',
    testMatch: '**/*.spec.ts',
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/salesforce.json',
    },
  },
],
});
