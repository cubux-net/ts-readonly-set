import add from '../src/add';

it('does not change orig', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(add(input, 50)).toEqual(new Set([10, 20, 30, 50]));
  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(add(input, 20)).toBe(input);
  expect(input).toEqual(backup);
});
