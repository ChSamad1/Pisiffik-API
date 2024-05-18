import { test, expect } from '@playwright/test';

test('API Post with form data', async ({ request }) => {
  const response = await request.post('https://api.dev.pisiffik.gl/api/transfer', {
    form: {
      "phone": "+923245774610",
      "password": "SA@1122",
      "receiver": "36152662-1bdd-4b0e-a50a-2215ee9823f2",
      "points": "10",
      "message": ""
    },
    headers: {
      "Accept": "application/json"
    }
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);
});
