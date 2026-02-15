import { test, expect } from '@playwright/test';
import { createBooking, createToken } from '../support/booker';

test('PUT /booking/:id -> atualiza reserva inteira', async ({ request }) => {
  const { bookingid } = await createBooking(request);
  const token = await createToken(request);

  const updated = {
    firstname: 'Rodrigo',
    lastname: 'Atualizado',
    totalprice: 999,
    depositpaid: false,
    bookingdates: {
      checkin: '2026-03-01',
      checkout: '2026-03-10',
    },
    additionalneeds: 'Late Checkout',
  };

  const resp = await request.put(`/booking/${bookingid}`, {
    data: updated,
    headers: { Cookie: `token=${token}` },
  });

  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();
  expect(body.lastname).toBe('Atualizado');
  expect(body.totalprice).toBe(999);
});
