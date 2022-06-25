import remove from './remove';

/**
 * Intersection of sets
 *
 * Creates new set containing only items which are presented in all given sets.
 *
 * - Will return input `set` when nothing to change (t.i. when `set` is a subset
 *   of every `and` sets).
 *
 * ```ts
 * const input: ReadonlySet<number> = new Set([10, 20, 30, 40]);
 *
 * intersection(input, new Set([30, 42, 20]));
 * // => Set(2) { 20, 30 }
 * ```
 *
 * @param set
 * @param and
 */
function intersection<K>(set: ReadonlySet<K>, ...and: ReadonlySet<K>[]) {
  let next = set;
  for (const andSet of and) {
    if (!next.size) {
      break;
    }
    for (const has of Array.from(next)) {
      if (!andSet.has(has)) {
        next = remove(next, has);
      }
    }
  }
  return next;
}

export default intersection;
