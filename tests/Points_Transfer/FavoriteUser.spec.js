import { test, expect } from '@playwright/test';

test('Favorite User API', async ({ request }) => {
    
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

    

    
    const removeResponse = await request.post('https://api.dev.pisiffik.gl/api/favorite/user', {
        form: {
            "user_id": "36152662-1bdd-4b0e-a50a-2215ee9823f2",
            "type": "remove"
        },
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    });

    console.log("Remove Response:", await removeResponse.json());
    expect(removeResponse.status()).toBe(200);

    
    const addResponse = await request.post('https://api.dev.pisiffik.gl/api/favorite/user', {
        form: {
            "user_id": "36152662-1bdd-4b0e-a50a-2215ee9823f2",
            "type": "add"
        },
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    });

    console.log("Add Response:", await addResponse.json());
    expect(addResponse.status()).toBe(200);
});
