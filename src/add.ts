/**
 * Add item to set
 *
 * Creates new set from input `set` by adding item `key`.
 *
 * - Will return input `set` when `key` is already included.
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30]);
 *
 * add(input, 40);
 * // => Set(4) { 10, 20, 30, 40 }
 * ```
 *
 * @param set
 * @param key
 */
function add<K>(set: ReadonlySet<K>, key: K): ReadonlySet<K> {
  return set.has(key) ? set : new Set(set).add(key);
}

export default add;
