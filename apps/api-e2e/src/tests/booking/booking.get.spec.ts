import { test, expect } from '@playwright/test';

test.describe('booking/ GET requests @booking', async () => {

    test('GET booking summary', async ({ request }) => {
        const response = await request.get("/booking");
        
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.length).toBeGreaterThanOrEqual(1);
    });

});