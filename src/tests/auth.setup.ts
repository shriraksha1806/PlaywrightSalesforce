
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/salesforce.json';

setup('Salesforce authentication', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');

  await page.pause();

 
  await expect(page.locator('body')).not.toBeEmpty({
    timeout: 30000,
  });

 
  await page.context().storageState({
    path: authFile,
  });

  console.log('Salesforce authentication state saved.');
});
