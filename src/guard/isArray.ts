import type { NarrowedTo } from '../types';
import { isString } from './isString';

/**
 * A function that checks if the passed parameter is an Array and narrows its type accordingly.
 *
 * @param data - The variable to check.
 * @returns True if the passed input is an Array, false otherwise.
 * @signature
 *    R.isArray(data)
 * @example
 *    R.isArray([5]) //=> true
 *    R.isArray([]) //=> true
 *    R.isArray('somethingElse') //=> false
 * @category Guard
 */
export function isArray<T>(
  data: ArrayLike<unknown> | T,
): data is NarrowedTo<T, unknown[]> {
  return Array.isArray(data);
}

/**
 * Narrow source type to `Array` && Check is empty array.
 */
export function isEmptyArray<T>(source: unknown): source is T[] {
  return isArray(source) && source.length === 0;
}

/**
 * Narrow source type to `Array` && Check is not empty.
 */
export function isNonEmptyArray<T>(source: unknown): source is T[] {
  return isArray(source) && source.length > 0;
}

/**
 * Narrow source type to `Array` && Check is not empty.
 */
export function isStringArray(source: unknown): source is string[] {
  return isNonEmptyArray(source) && source.every(isString);
}
