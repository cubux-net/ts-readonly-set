import remove from './remove';
import add from './add';

/**
 * Toggle an item in set
 *
 * Creates new set from input `set` by either adding or removing item `key` with
 * respect to optional flag `toBeIncluded`.
 *
 * - If `toBeIncluded` is `undefined` (by default), it works as `!set.has(key)`,
 *   t.i. `key` will be added if `set` doesn't include it, or removed otherwise.
 *   So, the result is always a new set in this case.
 * - If `toBeIncluded` is defined, it causes `toggle()` to work as either `add()`
 *   when `toBeIncluded` is `true`, or as `remove()` otherwise. In this case
 *   `toggle()` may return input `set` when nothing to change.
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30]);
 *
 * console.log(toggle(input, 20));
 * console.log(toggle(input, 20, false));
 * // both => Set(2) { 10, 30 }
 *
 * console.log(toggle(input, 40));
 * console.log(toggle(input, 40, true));
 * // both => Set(4) { 10, 20, 30, 40 }
 *
 * console.log(toggle(input, 20, true));
 * console.log(toggle(input, 40, false));
 * // both => Set(3) { 10, 20, 30 }
 * ```
 *
 * @param set
 * @param key
 * @param toBeIncluded
 */
function toggle<K>(
  set: ReadonlySet<K>,
  key: K,
  toBeIncluded?: boolean,
): ReadonlySet<K> {
  if (undefined === toBeIncluded) {
    const next = new Set(set);
    if (set.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    return next;
  }

  return toBeIncluded ? add(set, key) : remove(set, key);
}

export default toggle;
