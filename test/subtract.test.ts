import subtract from '../src/subtract';

it('does not change orig', () => {
  const input = new Set([10, 20, 30, 40]);
  const backup = new Set(input);

  expect(
    subtract(input, new Set([20, 42]), new Set([20, 40, 15]), new Set()),
  ).toEqual(new Set([10, 30]));
  expect(input).toEqual(backup);
});

it('quick return when becomes empty', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(
    subtract(input, new Set([42, 20, 10]), new Set([23, 30, 19]), null as any),
  ).toEqual(new Set());
  expect(() => subtract(input, null as any)).toThrow();
  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(subtract(input, new Set([42, 23]), new Set())).toBe(input);
  expect(subtract(input)).toBe(input);
  expect(input).toEqual(backup);
});
