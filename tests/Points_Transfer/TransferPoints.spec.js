import { test, expect } from '@playwright/test';

test('Transfer Points API', async ({ request }) => {
  
  const authResponse = await request.post('https://api.dev.pisiffik.gl/api/customer/login', {
    form: {
      "phone": "+923245774610",
      "password": "SA@1122"
    },
    headers: {
      "Accept": "application/json"
    }
  });

  const authData = await authResponse.json();
  const token = authData.token;

  
  const transferResponse = await request.post('https://api.dev.pisiffik.gl/api/transfer', {
    form: {
      "receiver": "36152662-1bdd-4b0e-a50a-2215ee9823f2",
      "points": "10",
      "message": ""
    },
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json"
    }
  });

  
  console.log(await transferResponse.json());
  expect(transferResponse.status()).toBe(200);
});
