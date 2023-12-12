/**
 * Returns `prev` when its elements are equal to elements in `next` (order does
 * not matter). Otherwise, returns `next`.
 *
 * @param prev
 * @param next
 */
function syncFrom<K>(prev: ReadonlySet<K>, next: ReadonlySet<K>) {
  if (
    prev !== next &&
    prev.size === next.size &&
    Array.from(prev).every((v) => next.has(v))
  ) {
    return prev;
  }
  return next;
}

export default syncFrom;
