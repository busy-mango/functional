import type { NarrowedTo } from '../types';

/**
 * Checks if the given parameter is of type `"object"` via `typeof`, excluding `null`.
 *
 * It's important to note that in JavaScript, many entities are considered objects, like Arrays, Classes, RegExps, Maps, Sets, Dates, URLs, Promise, Errors, and more. Although technically an object too, `null` is not considered an object by this function, so that its easier to narrow nullables.
 *
 * For a more specific check that is limited to plain objects (simple struct/shape/record-like objects), consider using `isPlainObject` instead. For a simpler check that only removes `null` from the type prefer `isNonNull` or `isDefined`.
 *
 * @param data - The variable to be checked for being an object type.
 * @returns The input type, narrowed to only objects.
 * @signature
 *    R.isObjectType(data)
 * @example
 *    // true
 *    R.isObjectType({}) //=> true
 *    R.isObjectType([]) //=> true
 *    R.isObjectType(Promise.resolve("something")) //=> true
 *    R.isObjectType(new Date()) //=> true
 *    R.isObjectType(new Error("error")) //=> true
 *
 *    // false
 *    R.isObjectType('somethingElse') //=> false
 *    R.isObjectType(null) //=> false
 * @dataFirst
 * @category Guard
 */
export function isObject<T>(data: T | object): data is object {
  return typeof data === 'object' && data !== null;
}

/**
 * Checks if `data` is a "plain" object. A plain object is defined as an object with string keys and values of any type, including primitives, other objects, functions, classes, etc (aka struct/shape/record/simple). Technically, a plain object is one whose prototype is either `Object.prototype` or `null`, ensuring it does not inherit properties or methods from other object types.
 *
 * This function is narrower in scope than `isObjectType`, which accepts any entity considered an `"object"` by JavaScript's `typeof`.
 *
 * Note that Maps, Arrays, and Sets are not considered plain objects and would return `false`.
 *
 * @param data - The variable to check.
 * @returns The input type, narrowed to only plain objects.
 * @signature
 *    R.isPlainObject(data)
 * @example
 *    // true
 *    R.isPlainObject({}) //=> true
 *    R.isPlainObject({ a: 123 }) //=> true
 *
 *    // false
 *    R.isPlainObject([]) //=> false
 *    R.isPlainObject(Promise.resolve("something")) //=> false
 *    R.isPlainObject(new Date()) //=> false
 *    R.isPlainObject(new Error("error")) //=> false
 *    R.isPlainObject('somethingElse') //=> false
 *    R.isPlainObject(null) //=> false
 * @category Guard
 */
export function isPlainObject<T>(
  data: Readonly<Record<PropertyKey, unknown>> | T,
): data is NarrowedTo<T, Record<PropertyKey, unknown>> {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- This is a low-level check, we can't avoid it being typed as `any`.
  const proto = Object.getPrototypeOf(data);
  return proto === null || proto === Object.prototype;
}

/**
 * Checks if the given source is an empty object.
 * @param source The object to check.
 * @returns true if source is a null object, false otherwise.
 */
export function isEmptyObject(
  source: unknown,
): source is Record<string, never> {
  return isPlainObject(source) && Reflect.ownKeys(source).length === 0;
}
