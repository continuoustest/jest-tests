const universalResponse = require('./index');

test('adds 1 + 2 to obtain 1', () => {
  expect(universalResponse(1, 2)).toBe(1);
});

test('adds 40 + 2 to obtain 0', () => {
  expect(universalResponse(40, 2)).toBe(0);
});