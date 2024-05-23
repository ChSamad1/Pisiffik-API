import { test, expect } from '@playwright/test';

test('GetLanguages API', async({request}) => {
    const response = await request.get('https://api.dev.pisiffik.gl/api/getLanguages',
    { 
    data :{"key": "YW1Gb1lXNTZZV2xpTG1GemJHRnRMbTFsYUdGeVFHZHRZV2xzTG1OdmJUcHdhWE5wWm1scg=="},
      headers:{"Accept":"application/json"}
    });
    console.log(await response.json())
    expect(response.status()).toBe(200)
  })

