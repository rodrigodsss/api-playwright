import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  projects: [
    { name: 'api', testDir: 'tests/api' },
  ],
});
