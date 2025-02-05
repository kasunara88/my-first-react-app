import ky from 'ky';

// Create a new instance an API
//api: This is the exported instance of ky configured with specific options. It can be reused across the application to make requests to the API.

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URI, // This prepends a base URL to all requests. This is useful when working with an API that has a common base URL.
  timeout: 60000, // Sets the maximum time (in milliseconds) before the request times out.
  retry: 0, // Configure how many times a failed request should automatically retry.
});
