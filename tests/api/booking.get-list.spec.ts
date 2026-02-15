import { test, expect } from '@playwright/test';

test('GET /booking -> lista de bookingid', async ({ request }) => {
  const resp = await request.get('/booking');
  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();
  expect(Array.isArray(body)).toBeTruthy();

  if (body.length > 0) {
    expect(body[0]).toHaveProperty('bookingid');
  }
});
