import { test, expect } from '@playwright/test';
import { createBooking } from '../support/booker';

test('GET /booking/:id -> retorna detalhes da reserva', async ({ request }) => {

  // cria uma reserva primeiro
  const created = await createBooking(request);

  // busca a reserva criada
  const resp = await request.get(`/booking/${created.bookingid}`);

  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();

  // valida os dados retornados
  expect(body.firstname).toBe(created.booking.firstname);
  expect(body.lastname).toBe(created.booking.lastname);
});
