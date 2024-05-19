import { test, expect } from '@playwright/test';
import { config } from '../../../src/support/config';

test.describe("auth/login POST requests @auth", async () => {
    const username = config.ADMIN_NAME;
    const password = config.ADMIN_PASSWORD;
  
    test("POST with valid credentials @happy", async ({ request }) => {
      // Calculating Duration
      const start = Date.now();
      
  
      const response = await request.post(`/auth`, {
        data: {
          username: username,
          password: password,
        },
      });
  
      // Calculating Duration
      const end = Date.now();
      const duration = end - start;
  
      // Asserting Duration
      expect(duration).toBeLessThan(1000);

      const responseBody = await response.json();
      const token = responseBody.token;
      console.log("New Token is: " + token);
  
      expect(response.status()).toBe(200);
      
    });
}); 