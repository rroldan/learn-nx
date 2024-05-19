import { createCookies } from "./auth";
import { config } from '../support/config';

const username = config.ADMIN_NAME;
const password = config.ADMIN_PASSWORD;

/**
 * 
 * @param token a valid token to be used in the request if one is not provided cookies will be created from default username and password
 * @returns a header object with the token set as a cookie
 * 
 * @example 
 * import { createHeaders } from "../utils/createHeaders";
 * 
 * const headers = await createHeaders(token);
 *     const response = await request.delete(`booking/${bookingId}`, {
      headers: headers,
    });
 * 
 */
export async function createHeaders(token: string): Promise<RequestHeaders> {
  let requestHeaders: RequestHeaders;

  if (token) {
    requestHeaders = {
      cookie: `token=${token}`,
    };
  }
  
  return requestHeaders;
}

/**
 * 
 * @returns a header object with an invalid cookie used to test negative scenarios
 * 
 * @example 
 * import { createInvalidHeaders } from "../utils/createHeaders";
 * 
 * const invalidHeader = await createInvalidHeaders();
 *     const response = await request.delete(`booking/${bookingId}`, {
      headers: invalidHeader,
    });
 * 
 */
export async function createInvalidHeaders() {
  const requestHeaders = {
    cookie: "cookie=invalid",
  };

  return requestHeaders;
}

interface RequestHeaders {
  cookie: string;
}