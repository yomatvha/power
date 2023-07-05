import lifeIndicator from '../basic';

test('greenIndicator', () => {
  const result = lifeIndicator({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
test('yellowIndicator', () => {
  const result = lifeIndicator({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});
test('redIndicator', () => {
  const result = lifeIndicator({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
