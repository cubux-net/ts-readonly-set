import { add, intersection, remove, subtract, toggle, union } from '../src';

it('common', () => {
  expect(add(new Set([10, 20]), 30)).toEqual(new Set([10, 20, 30]));
  expect(intersection(new Set([10, 20, 40]), new Set([30, 20, 10]))).toEqual(
    new Set([10, 20]),
  );
  expect(remove(new Set([10, 20, 30]), 30)).toEqual(new Set([10, 20]));
  expect(subtract(new Set([10, 20, 30, 40]), new Set([20, 40]))).toEqual(
    new Set([10, 30]),
  );
  expect(toggle(new Set([10, 20]), 20)).toEqual(new Set([10]));
  expect(union(new Set([10, 30]), new Set([20, 10]))).toEqual(
    new Set([10, 30, 20]),
  );
});
