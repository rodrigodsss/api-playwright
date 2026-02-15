import { expect, APIRequestContext } from '@playwright/test';

export type BookingPayload = {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: { checkin: string; checkout: string };
  additionalneeds?: string;
};

export async function createToken(request: APIRequestContext): Promise<string> {
  const resp = await request.post('/auth', {
    data: { username: 'admin', password: 'password123' },
  });
  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();
  expect(body.token).toBeTruthy();
  return body.token as string;
}

export async function createBooking(
  request: APIRequestContext,
  overrides: Partial<BookingPayload> = {}
): Promise<{ bookingid: number; booking: BookingPayload }> {
  const booking: BookingPayload = {
    firstname: 'Rodrigo',
    lastname: 'Silva',
    totalprice: 123,
    depositpaid: true,
    bookingdates: { checkin: '2026-02-14', checkout: '2026-02-16' },
    additionalneeds: 'Breakfast',
    ...overrides,
  };

  const resp = await request.post('/booking', { data: booking });
  expect(resp.ok()).toBeTruthy();

  const body = await resp.json();
  expect(body.bookingid).toBeTruthy();
  expect(body.booking).toBeTruthy();

  return { bookingid: body.bookingid as number, booking: body.booking as BookingPayload };
}
