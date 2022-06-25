import remove from '../src/remove';

it('does not change orig', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(remove(input, 20)).toEqual(new Set([10, 30]));
  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(remove(input, 50)).toBe(input);
  expect(input).toEqual(backup);
});
