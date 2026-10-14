
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/salesforce.json';

setup('Salesforce authentication', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');

  // Log in manually and complete OTP if requested.
  await page.pause();

  // Confirm that the browser has loaded a page successfully.
  await expect(page.locator('body')).not.toBeEmpty({
    timeout: 30000,
  });

  // Save cookies and local storage for reuse.
  await page.context().storageState({
    path: authFile,
  });

  console.log('Salesforce authentication state saved.');
});
