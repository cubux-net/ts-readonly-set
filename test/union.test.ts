import union from '../src/union';

it('does not change orig', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(union(input, new Set([50, 20, 60]), new Set())).toEqual(
    new Set([10, 20, 30, 50, 60]),
  );
  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(union(input, new Set([20, 10]), new Set())).toBe(input);
  expect(union(input)).toBe(input);
  expect(input).toEqual(backup);
});
