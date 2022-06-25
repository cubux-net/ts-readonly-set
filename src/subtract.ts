import remove from './remove';

/**
 * Subtract sets
 *
 * Creates new set from `set` by subtracting every given `sub` set.
 *
 * - Will return input `set` when nothing to change (t.i. when `set` doesn't
 *   include any item of any `sub` sets).
 * - May return earlier when intermediate result is already empty set.
 * - Logic of `subtract(a, b, c)` is same as `subtract(subtract(a, b), c)` and
 *   is same as `subtract(a, union(b, c))`.
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30, 40]);
 *
 * subtract(input, new Set([30, 42, 20]));
 * // => Set(2) { 10, 40 }
 * ```
 *
 * @param set
 * @param sub
 */
function subtract<K>(
  set: ReadonlySet<K>,
  ...sub: ReadonlySet<K>[]
): ReadonlySet<K> {
  let next = set;
  for (const subSet of sub) {
    if (!next.size) {
      break;
    }
    for (const del of Array.from(subSet)) {
      next = remove(next, del);
    }
  }
  return next;
}

export default subtract;
