import { test, expect } from '@playwright/test';
import { createBooking } from '../support/booker';


test('POST /booking -> cria reserva', async ({ request }) => {
  const created = await createBooking(request);

  expect(created.bookingid).toBeTruthy();
  expect(created.booking.firstname).toBe('Rodrigo');
});
