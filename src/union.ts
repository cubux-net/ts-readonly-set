import addFn from './add';

/**
 * Union of sets
 *
 * Creates new set which includes items from all the given sets.
 *
 * - Will return input `set` when nothing to change (t.i. when `set` is a
 *   superset of every `sub` sets).
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30]);
 *
 * union(input, new Set([30, 42, 20, 40]));
 * // => Set(5) { 10, 20, 30, 42, 40 }
 * ```
 *
 * @param set
 * @param add
 */
function union<K>(set: ReadonlySet<K>, ...add: ReadonlySet<K>[]) {
  let next = set;
  for (const addSet of add) {
    for (const v of Array.from(addSet)) {
      next = addFn(next, v);
    }
  }
  return next;
}

export default union;
