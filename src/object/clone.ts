import { isObject } from '@/guard/isObject';
import { isArray, isDate, isFunction, isNull, isRegExp } from '../guard';

/**
 * Creates a deep copy of the value. Supported types: [plain objects](#isPlainObject),
 * `Array`, `number`, `string`, `boolean`, `Date`, and `RegExp`. Functions are
 * assigned by reference rather than copied. Class instances or any other
 * built-in type that isn't mentioned above are not supported (but might
 * work).
 *
 * @param data - The object to clone.
 */
export function clone<T>(data: T): T;

export function clone<T>(data: T): T {
  // Functions aren't cloned, we return the same instance.
  if (isFunction(data)) return data;

  if (isArray(data)) return data.map(clone) as T;

  if (isNull(data) || isDate(data) || isRegExp(data)) {
    return structuredClone(data);
  }

  if (isObject(data)) {
  }

  return isObject(data)
    ? Object.entries(data).reduce(
        (acc, [key, val]) => ({ ...acc, [key]: clone(val) }),
        {} as T,
      )
    : structuredClone(data);
}
