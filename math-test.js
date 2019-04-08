const { sum, sub, sumAsync, subAsync } = require('./math');
// const { expect, test } = require('./assertion-library');

test('Should be able to add', () => {
  expect(sum(1, 2)).toBe(3);
})

test('Should be able to sub', () => {
  expect(sub(2, 1)).toBe(1);
})

test('Should be able to async add', async () => {
  const sum = await sumAsync(1, 2);

  expect(sum).toBe(3);
})

test('Should be able to async sub', async () => {
  const sub = await subAsync(2, 1);

  expect(sub).toBe(1);
})