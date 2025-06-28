import axios from 'axios';

describe('API Tests', () => {
    test('GET request should return correct data', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.title).toBeDefined();
    });

    test('POST request should return a new resource ID', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        expect(response.status).toBe(201);
        expect(response.data.id).toBeDefined();
    });
});