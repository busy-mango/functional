import type { IsAny } from 'type-fest';

/**
 * An extension of Extract for type predicates which falls back to the base
 * in order to narrow the `unknown` case.
 *
 * @example
 *   function isMyType<T>(data: T | MyType): data is NarrowedTo<T, MyType> { ... }
 */
export type NarrowedTo<T, B> = Extract<T, B> extends never
  ? B
  : IsAny<T> extends true
    ? B
    : Extract<T, B>;
