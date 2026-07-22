// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI
  workers: process.env.CI ? 1 : undefined,

  // HTML Report
  reporter: 'html',

  // Shared settings
  use: {
    headless: false,          // Opens browser in headed mode
    viewport: null,           // Opens browser maximized
    trace: 'on-first-retry',

    launchOptions: {
      slowMo: 500             // Slows execution by 500 ms
    }
  },

  // Browser Configuration
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Uncomment if you want Firefox
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // Uncomment if you want WebKit
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ],
});