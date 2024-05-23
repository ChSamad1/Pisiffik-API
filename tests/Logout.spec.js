import { test, expect } from '@playwright/test';

test.skip('Logout API', async({request}) => {
    const response = await request.get('https://api.dev.pisiffik.gl/api/customer/logout',
    { 
    data :{"phone": "+923245774610", "password":"SA@1122"},
      headers:{"Accept":"application/json"}
    });
    console.log(await response.json())
    expect(response.status()).toBe(200)
  })

