import { isEmptyArray } from './isArray';
import { isNil } from './isNil';
import type { Nil } from './isNil';
import { isEmptyObject } from './isObject';
import { isEmptyString } from './isString';

/**
 * Checks if the given value is empty value.
 * Empty values include `[]`, `{}`, `''`, `null`, `undefined`, `NaN`.
 * @param source The value to check.
 * @returns true if source is null, false otherwise.
 */
export function isEmpty(
  source: unknown,
): source is '' | Nil | [] | Record<string, never> {
  // Checks for an empty array, empty object, empty string, null, or NaN, and returns true if one of the conditions is met.
  return (
    isEmptyArray(source) || // Check if it's an empty array.
    isEmptyObject(source) || // Check if it's an empty object.
    isEmptyString(source) || // Check if it's an empty string.
    Number.isNaN(source) || // Check if it's NaN.
    isNil(source) // Check if it is null or undefined.
  );
}
