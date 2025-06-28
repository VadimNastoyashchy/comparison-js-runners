import { describe, test, expect, request } from 'scripterio';

describe('API Tests', () => {
    test('GET request should return correct data', async () => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();

        expect(response.status).toBeEqual(200);
        expect(data.id).toBeEqual(1);
        expect(data.title).toBeDefined();
    });

    test('POST request should return a new resource ID', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        const response = await request.post('https://jsonplaceholder.typicode.com/posts', { data: newPost });
        const data = await response.json();

        expect(response.status).toBeEqual(201);
        expect(data.id).toBeDefined();
    });
});