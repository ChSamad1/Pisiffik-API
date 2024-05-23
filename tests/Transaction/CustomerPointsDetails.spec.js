import { test, expect } from '@playwright/test';

test('Points List API - Page 1', async ({ request }) => {
    const url = 'https://api.dev.pisiffik.gl/api/customer/points/detail/25591';
    const headers = {
        "Accept": "application/json",
        "x-localization": "en",
        "Authorization": "Bearer 95117|wRMmrRy4tCvaGASyF48U2Mv1QaIMk75KEyhRc5r0"
    };
    
    const response = await request.get(url, { headers });

    const responseBody = await response.json();
    console.log('Response Body:', JSON.stringify(responseBody, null, 2));

    expect(response.status())
});
