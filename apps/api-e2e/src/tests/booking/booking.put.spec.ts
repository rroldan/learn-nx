import { test, expect } from '@playwright/test';
import { config } from '../../support/config';
import { createToken } from '../../utils/auth';
import bookingDetails from '../../data/booking-details.json';
import { createHeaders } from '../../utils/createHeaders';

test.describe('booking/{id} PUT requests @booking', async () => {
    const username = config.ADMIN_NAME;
    const password = config.ADMIN_PASSWORD;
    let token;
    let headers;
    
    test.beforeAll(async () => {
        token = await createToken(username, password);
        headers = await createHeaders(token);
      
      });
  
    test('`PUT booking with specific id', async ({ request }) => {
    
      const updateRequest = await request.put(`/booking/1`, {
        headers: headers,
        data: bookingDetails,
       
    });
  
    console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);
    const updatedResponseBody = await updateRequest.json()
    expect(updatedResponseBody).toHaveProperty("firstname", "Alex");
    expect(updatedResponseBody).toHaveProperty("lastname", "Lee");
    expect(updatedResponseBody).toHaveProperty("totalprice", 2000);
    expect(updatedResponseBody).toHaveProperty("depositpaid", true);
}); 
}); 
