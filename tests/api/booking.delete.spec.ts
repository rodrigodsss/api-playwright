import { test, expect } from '@playwright/test';
import { createBooking, createToken } from '../support/booker';

test('DELETE /booking/:id -> remove reserva', async ({ request }) => {
  const { bookingid } = await createBooking(request);
  const token = await createToken(request);

  const del = await request.delete(`/booking/${bookingid}`, {
    headers: { Cookie: `token=${token}` },
  });

  expect([200, 201, 204]).toContain(del.status());

  const get = await request.get(`/booking/${bookingid}`);
  expect([404, 405]).toContain(get.status());
});
