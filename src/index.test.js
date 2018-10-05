
const knex = require('./services/db');

beforeAll(async () => {
  await knex('users').insert({
    name: "test",
    email: "test@test.com",
    password: "123456"
  })
});

test('it should be true', async () => {
  const testUser = await knex('users')
    .select('*')
    .where({email: 'test@test.com'})
    .first();
  expect(typeof testUser).toBe('object');
  expect(testUser.name).toBe('test');
});
