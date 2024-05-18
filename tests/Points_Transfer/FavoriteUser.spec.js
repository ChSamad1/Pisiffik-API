import { test, expect } from '@playwright/test';

test('Remove and then add user', async ({ request }) => {
  
  const removeResponse = await request.post('https://api.dev.pisiffik.gl/api/favorite/user', {
    data: {
      "user_id": "36152662-1bdd-4b0e-a50a-2215ee9823f2", 
      "type": "remove"
    },
    headers: {
      "Accept": "application/json"
    }
  });
  
  
  console.log(await removeResponse.json());
  expect(removeResponse.status()).toBe(200);

  
  const addResponse = await request.post('https://api.dev.pisiffik.gl/api/favorite/user', {
    data: {
      "user_id": "36152662-1bdd-4b0e-a50a-2215ee9823f2", 
      "type": "add"
    },
    headers: {
      "Accept": "application/json"
    }
  });
  
 
  console.log(await addResponse.json());
  expect(addResponse.status()).toBe(200);
});
