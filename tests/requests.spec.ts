import { test, expect } from '@playwright/test';

test('Get Request Example', async ({ request }) => {
  const response = await request.get('/todos/1');
  console.log(response.headers());
  console.log(response.url());
  console.log(response.status());
  expect(response.status()).toEqual(304);
  expect(response.status()).toStrictEqual(304);
  expect(response.ok()).toBeDefined();
});

test('Post Request Example', async ({ request }) => {
  const newItem = await request.post('/posts', {
    data: {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  });
  console.log(newItem.headers());
  console.log(newItem.url());
  console.log(newItem.status());
  expect(newItem.status()).toEqual(201);
  expect(newItem.ok()).toBeTruthy();
});

test('Put Request Example', async ({ request }) => {
  const modifiedItem = await request.put('/posts/1', {
    data: {
      "userId": 1,
      "id": 1,
      "title": "edited",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  });
  console.log(modifiedItem.headers());
  console.log(modifiedItem.url());
  console.log(modifiedItem.status());
  expect(modifiedItem.status()).toEqual(200);
  expect(modifiedItem.ok()).toBeTruthy();
});

test('Delete Request Example', async ({ request }) => {
  const response = await request.delete('/posts/1');
  console.log(response.headers());
  console.log(response.url());
  console.log(response.status());
  expect(response.status()).toEqual(200);
  expect(response.ok()).toBeTruthy();
});
