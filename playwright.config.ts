import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 10 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'es-ES,es;q=0.9',
      'Cache-Control': 'max-age=0',
      'Cookie': '_ga_E3C3GCQVBN=GS1.1.1697128598.1.0.1697128598.0.0.0; _ga=GA1.1.767541713.1697128599',
      'If-None-Match': 'W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
