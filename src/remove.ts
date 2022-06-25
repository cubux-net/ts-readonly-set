/**
 * Remove item from set
 *
 * Creates new set from `set` without given item `key`.
 *
 * - Will return input `set` when `key` is not included in `set`.
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30]);
 *
 * console.log(remove(input, 20));
 * // => Set(2) { 10, 30 }
 * ```
 *
 * @param set
 * @param key
 */
function remove<K>(set: ReadonlySet<K>, key: K): ReadonlySet<K> {
  if (!set.has(key)) {
    return set;
  }

  const next = new Set(set);
  next.delete(key);
  return next;
}

export default remove;
