import intersection from '../src/intersection';

it('does not change orig', () => {
  const input = new Set([10, 20, 30, 40]);
  const backup = new Set(input);

  expect(intersection(input, new Set([50, 30, 10, 60]))).toEqual(
    new Set([10, 30]),
  );
  expect(
    intersection(
      input,
      new Set([50, 30, 10, 60, 20]),
      new Set([42, 40, 10, 23, 30]),
    ),
  ).toEqual(new Set([10, 30]));
  expect(input).toEqual(backup);
});

it('intersection with empty', () => {
  const input = new Set([10, 20, 30, 40]);
  const backup = new Set(input);

  expect(intersection(input, new Set([50, 30, 10, 60]), new Set())).toEqual(
    new Set(),
  );
  expect(input).toEqual(backup);
});

it('quick return when becomes empty', () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(
    intersection(
      input,
      new Set([20, 42, 10]),
      new Set([23, 30, 10]),
      new Set([19, 30, 20]),
      null as any,
    ),
  ).toEqual(new Set());
  expect(() => intersection(input, null as any)).toThrow();
  expect(input).toEqual(backup);
});

it("does nothing when it's nothing to change", () => {
  const input = new Set([10, 20, 30]);
  const backup = new Set(input);

  expect(intersection(input, new Set([20, 42, 10, 32, 30]))).toBe(input);
  expect(intersection(input)).toBe(input);
  expect(input).toEqual(backup);
});
