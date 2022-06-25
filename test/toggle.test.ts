import toggle from '../src/toggle';

it('does not change orig', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  const expectedWith = new Set([10, 20, 30, 50]);
  expect(toggle(input, 50)).toEqual(expectedWith);
  expect(toggle(input, 50, true)).toEqual(expectedWith);

  const expectedWithout = new Set([10, 30]);
  expect(toggle(input, 20)).toEqual(expectedWithout);
  expect(toggle(input, 20, false)).toEqual(expectedWithout);

  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(toggle(backup, 20, true)).toBe(backup);
  expect(toggle(backup, 50, false)).toBe(backup);

  expect(input).toEqual(backup);
});
