# `@cubux/readonly-set`

[![NPM latest](https://img.shields.io/npm/v/@cubux/readonly-set.svg)](https://www.npmjs.com/package/@cubux/readonly-set)

A bunch of helper functions to work with read-only sets. Works internally with
native sets without any kind of magic.

```ts
import { add, remove } from '@cubux/readonly-set';

const input: ReadonlySet<number> = new Set([10, 20, 30]);

console.log(add(input, 40));
// => Set(4) { 10, 20, 30, 40 }

console.log(remove(input, 20));
// => Set(2) { 10, 30 }
```

Alternative usage:

```ts
import * as RoSet from '@cubux/readonly-set';

const input: ReadonlySet<number> = new Set([10, 20, 30]);
console.log(RoSet.add(input, 40));
// => Set(4) { 10, 20, 30, 40 }
```

## Use Cases

### State management

```tsx
import { FC, useState, ChangeEvent } from 'react';
import { toggle } from '@cubux/readonly-set';

const TodoList: FC = () => {
  const [checked, setChecked] = useState<ReadonlySet<string>>(() => new Set());

  const handleCheckItem = (key: string, e: ChangeEvent<HTMLInputElement>) =>
    setChecked(prev => toggle(prev, key, e.target.checked));

  ...
};
```

## Install

```sh
npm i @cubux/readonly-set
```

## API

### `add()`

Add item to set

```ts
add(
  set: ReadonlySet<K>,
  key: K,
): ReadonlySet<K>
```

Creates new set from input `set` by adding item `key`.

- Will return input `set` when `key` is already included.

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30]);

add(input, 40);
// => Set(4) { 10, 20, 30, 40 }
```

See also: `toggle()`, `union()`.

### `intersection()`

Intersection of sets

```ts
intersection(
  set:    ReadonlySet<K>,
  ...and: ReadonlySet<K>[],
): ReadonlySet<K>
```

Creates new set containing only items which are presented in all given sets.

- Will return input `set` when nothing to change (t.i. when `set` is a subset of
  every `and` sets).
- May return earlier when intermediate result is already empty set.

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30, 40]);

intersection(input, new Set([30, 42, 20]));
// => Set(2) { 20, 30 }
```

See also `subtract()`, `union()`.

### `remove()`

Remove item from set

```ts
remove(
  set: ReadonlySet<K>,
  key: K,
): ReadonlySet<K>
```

Creates new set from `set` without given item `key`.

- Will return input `set` when `key` is not included in `set`.

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30]);

console.log(remove(input, 20));
// => Set(2) { 10, 30 }
```

See also `add()`, `intersection()`, `toggle()`.

### `subtract()`

Subtract sets

```ts
subtract(
  set:    ReadonlySet<K>,
  ...sub: ReadonlySet<K>[]
): ReadonlySet<K>
```

Creates new set from `set` by subtracting every given `sub` set.

- Will return input `set` when nothing to change (t.i. when `set` doesn't
  include any item of any `sub` sets).
- May return earlier when intermediate result is already empty set.
- Logic of `subtract(a, b, c)` is same as `subtract(subtract(a, b), c)` and is
  same as `subtract(a, union(b, c))`.

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30, 40]);

subtract(input, new Set([30, 42, 20]));
// => Set(2) { 10, 40 }
```

See also `intersection()`, `remove()`.

### `toggle()`

Toggle an item in set

```ts
toggle(
  set:           ReadonlySet<K>,
  key:           K,
  toBeIncluded?: boolean,
): ReadonlySet<K>
```

Creates new set from input `set` by either adding or removing item `key` with
respect to optional flag `toBeIncluded`.

- If `toBeIncluded` is `undefined` (by default), it works as `!set.has(key)`,
  t.i. `key` will be added if `set` doesn't include it, or removed otherwise.
  So, the result is always a new set in this case.
- If `toBeIncluded` is defined, it causes `toggle()` to work as either `add()`
  when `toBeIncluded` is `true`, or as `remove()` otherwise. In this case
  `toggle()` may return input `set` when nothing to change.

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30]);

console.log(toggle(input, 20));
console.log(toggle(input, 20, false));
// both => Set(2) { 10, 30 }

console.log(toggle(input, 40));
console.log(toggle(input, 40, true));
// both => Set(4) { 10, 20, 30, 40 }

console.log(toggle(input, 20, true));
console.log(toggle(input, 40, false));
// both => Set(3) { 10, 20, 30 }
```

See also `add()`, `remove()`.

### `union()`

Union of sets

```ts
union(
  set:    ReadonlySet<K>,
  ...add: ReadonlySet<K>[],
): ReadonlySet<K>
```

Creates new set which includes items from all the given sets.

- Will return input `set` when nothing to change (t.i. when `set` is a superset
  of every `sub` sets).

```ts
const input: ReadonlySet<number> = new Set([10, 20, 30]);

union(input, new Set([30, 42, 20, 40]));
// => Set(5) { 10, 20, 30, 42, 40 }
```

See also `add()`.
