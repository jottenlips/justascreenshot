import { jas } from '../handler'

test('return 404 when no url is present with 404 image', async () => {
  const response = await jas({
    queryStringParameters: {},
  })
  expect(response.statusCode).toBe(404)
  expect(response.body).toBeTruthy()
});

test('return 200 when url is present', async () => {
  const response = await jas({
    queryStringParameters: {
      url: '/',
    },
  })
  expect(response.statusCode).toBe(200)
  expect(response.body).toBeTruthy()
});