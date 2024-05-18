import { test, expect } from '@playwright/test';

test('API Post', async({request}) => {
    const response = await request.post('https://api.dev.pisiffik.gl/api/search/user',
    { 
    data :{"search": "Samad"},
      headers:{"Accept":"application/json"}
    });
    console.log(await response.json())
    expect(response.status()).toBe(200)
  })

