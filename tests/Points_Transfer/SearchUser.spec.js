import { test, expect } from '@playwright/test';

test('Search User API', async({request}) => {
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

    const response = await request.post('https://api.dev.pisiffik.gl/api/search/user', {
        form: {
            "search": "Samad"
        },
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);
});
