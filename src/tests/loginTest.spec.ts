import { test, expect } from '@playwright/test';

test('Open Salesforce home page', async ({ page }) => {
  await page.goto(
    'https://orgfarm-93b4f441d5-dev-ed.develop.lightning.force.com/lightning/page/home'
  );

  await expect(page.locator('body')).not.toBeEmpty();
});