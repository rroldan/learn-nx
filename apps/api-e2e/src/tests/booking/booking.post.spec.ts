import { test, expect } from '@playwright/test';

import bookingDetails from '../../data/booking-details.json';

test.describe('booking/ POST requests @booking', async () => {

test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(`/booking`, {
        data: bookingDetails
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Alex");
    expect(responseBody.booking).toHaveProperty("lastname", "Lee");
    expect(responseBody.booking).toHaveProperty("totalprice", 2000);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
    });
});
