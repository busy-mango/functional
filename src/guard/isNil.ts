/** `Null` || `undefined` */
export type Nil = null | undefined;

/**
 * A function that checks if the passed parameter is not `null` and narrows its type accordingly.
 * Notice that `undefined` is not null!
 *
 * @param data - The variable to check.
 * @returns True if the passed input is defined, false otherwise.
 * @signature
 *    R.isNonNull(data)
 * @example
 *    R.isNonNull('string') //=> true
 *    R.isNonNull(null) //=> false
 *    R.isNonNull(undefined) //=> true
 * @category Guard
 */
export function isNonNull<T>(data: T | null): data is T {
  return data !== null;
}

/**
 * A function that checks if the passed parameter is not `null` and narrows its type accordingly.
 * Notice that `undefined` is not null!
 *
 * @param data - The variable to check.
 * @returns True if the passed input is defined, false otherwise.
 * @signature
 *    R.isNonNull(data)
 * @example
 *    R.isNonNull('string') //=> true
 *    R.isNonNull(null) //=> false
 *    R.isNonNull(undefined) //=> true
 * @category Guard
 */
export function isNull(data: unknown): data is null {
  return data === null;
}

/**
 * Narrow source type to `undefined`.
 */
export function isUndefined(source: unknown): source is undefined {
  return source === undefined;
}

/**
 * Narrow source type to `Nil`.
 */
export function isNil(source: unknown): source is Nil {
  return isNull(source) || isUndefined(source);
}

/**
 * Narrow source type is not `nundefined`.
 */
export function isNotUndefined<T>(source: undefined | T): source is T {
  return source !== undefined;
}
