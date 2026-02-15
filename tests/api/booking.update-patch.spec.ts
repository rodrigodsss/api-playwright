import { test, expect } from '@playwright/test';
import { createBooking, createToken } from '../support/booker';

test('PATCH /booking/:id -> atualiza parcialmente', async ({ request }) => {
  const { bookingid } = await createBooking(request);
  const token = await createToken(request);

  const resp = await request.patch(`/booking/${bookingid}`, {
    data: { firstname: 'PatchName' },
    headers: { Cookie: `token=${token}` },
  });

  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();
  expect(body.firstname).toBe('PatchName');
});
