import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('dashboard link', async({ page }) => {
  await page.goto('localhost:3000');

  await page.getByRole('link', { name: 'Dashboard' }).click();

  await expect(page).toHaveURL('http://localhost:3000/dashboard')
})

test('about link', async({ page }) => {
  await page.goto('localhost:3000');

  await page.getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL('http://localhost:3000/about')
})

test('sign up link', async({ page }) => {
  await page.goto('localhost:3000');

  await page.getByRole('link', { name: 'Signup' }).click();

  await expect(page).toHaveURL('https://dev-j6de17knhte8z8u6.us.auth0.com/u/signup?state=hKFo2SA5bkRETEZaekR1X3NsZFZjNk5WRmVDUFgtQkRGSnlka6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGxLa1VtOFdnN1ZyZmllYUxoNGdObVRBbmZfUE9rMWpUo2NpZNkgZGJsSHpZbzFmYTV5cTBVZExzZndvR2ozb2ZvODhFVkg')
})

test('login link', async({ page }) => {
  await page.goto('localhost:3000');

  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://dev-j6de17knhte8z8u6.us.auth0.com/u/login?state=hKFo2SAtLU9ZVDNlcXdQZ0N2YWp6cGplSWFudWx1ek5QdGlVRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEFjSEd1OWVDNDdPZ1dsejItOGVBVnJCUWg0ZkZONkx3o2NpZNkgZGJsSHpZbzFmYTV5cTBVZExzZndvR2ozb2ZvODhFVkg')
})