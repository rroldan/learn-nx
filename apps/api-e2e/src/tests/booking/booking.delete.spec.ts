import { test, expect } from '@playwright/test';
import { config } from '../../support/config';
import { createToken } from '../../utils/auth';
import bookingDetails from '../../data/booking-details.json';
import { createHeaders } from '../../utils/createHeaders';

test.describe("booking/{id} DELETE requests @booking", async () => {
   
    const username = config.ADMIN_NAME;
    const password = config.ADMIN_PASSWORD;
    let token;
    let bookingId;
    let headers;

    test("DELETE booking with specific booking id", async ({ request }) => {
        await test.step('create booking', async () => {
            const response = await request.post(`/booking`, {
                data: bookingDetails
            });
            const responseBody = await response.json()
            bookingId = responseBody.bookingid;
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
        
        });


        token = await createToken(username, password);
        headers = await createHeaders(token);
        const deleteRequest = await request.delete(`booking/${bookingId}`, {
          headers: headers
        });
        
        expect(deleteRequest.status()).toEqual(201);
        expect(deleteRequest.statusText()).toBe('Created');
    });


});