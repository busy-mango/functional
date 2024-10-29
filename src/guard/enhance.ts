import { isObject } from './isObject';

/**
 * Checks if the given source is an instance of Promise.
 * If is Promise, narrow to type Promise.
 * @template T - The type of the Promise value.
 * @template S - The type of the alternative value.
 * @param {Promise<T> | S} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of Promise, false otherwise.
 */
export function isPromise<T, S>(source: Promise<T> | S): source is Promise<T> {
  return source instanceof Promise;
}

/**
 * Checks if the given source is an instance of URLSearchParams.
 * If is URLSearchParams, narrow to type URLSearchParams.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of URLSearchParams, false otherwise.
 */
export function isURLSearchParams(source: unknown): source is URLSearchParams {
  return source instanceof URLSearchParams;
}

/**
 * Checks if the given source is an instance of Blob.
 * If is Promise, narrow to type Promise.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of Blob, false otherwise.
 */
export function isBlob(source: unknown): source is Blob {
  return source instanceof Blob;
}

/**
 * Checks if the given source is an instance of File.
 * If is File, narrow to type File.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of File, false otherwise.
 */
export function isFile(source: unknown): source is File {
  return source instanceof File;
}

/**
 * Checks if the given source is an instance of ArrayBuffer.
 * If is ArrayBuffer, narrow to type ArrayBuffer.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of ArrayBuffer, false otherwise.
 */
export function isArrayBuffer(source: unknown): source is ArrayBuffer {
  return source instanceof ArrayBuffer;
}

/**
 * A function that checks if the passed parameter is a Date and narrows its type accordingly.
 *
 * @param data - The variable to check.
 * @returns True if the passed input is a Date, false otherwise.
 * @signature
 *    R.isDate(data)
 * @example
 *    R.isDate(new Date()) //=> true
 *    R.isDate('somethingElse') //=> false
 * @category Guard
 */
export function isDate(data: unknown): data is Date {
  return data instanceof Date;
}

/**
 * Checks if the given source is an instance of RegExp.
 * If is RegExp, narrow to type RegExp.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of RegExp, false otherwise.
 */
export function isRegExp(source: unknown): source is RegExp {
  return source instanceof RegExp;
}

/**
 * Checks if the given source is an instance of Error.
 * If is Error, narrow to type Error.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of Error, false otherwise.
 */
export function isError(source: unknown): source is Error {
  return source instanceof Error;
}

/**
 * Checks if the given source is an instance of Uint8Array.
 * If is Uint8Array, narrow to type Uint8Array.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of Uint8Array, false otherwise.
 */
export function isUint8Array(source: unknown): source is Uint8Array {
  return source instanceof Uint8Array;
}

/**
 * Checks if the given source is an instance of WeakSet.
 * If is WeakSet, narrow to type WeakSet.
 * @template T - The type of the WeakSet keys.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of WeakSet, false otherwise.
 */
export function isWeakSet<T extends WeakKey>(
  source: unknown,
): source is WeakSet<T> {
  return source instanceof WeakSet;
}

/**
 * Checks if the provided source is an instance of FormData.
 *
 * @param source The value to check.
 * @returns Returns true if source is an instance of FormData, false otherwise.
 */
export function isFormData(source: unknown): source is FormData {
  return source instanceof FormData;
}

/**
 * Checks if the provided source is an instance of ReadableStream.
 *
 * @param source The value to check.
 * @returns Returns true if source is an instance of ReadableStream, false otherwise.
 */
export function isReadableStream(source: unknown): source is ReadableStream {
  return source instanceof ReadableStream;
}

/**
 * Narrow source type to `isArrayBufferLike`.
 */
export function isArrayBufferLike(source: unknown): source is ArrayBufferLike {
  return (
    isArrayBuffer(source) ||
    isUint8Array(source) ||
    (isObject(source) &&
      'ArrayBuffer' in source &&
      isArrayBuffer(source.ArrayBuffer))
  );
}

/**
 * Narrow source type to `ArrayBufferView`.
 */
export function isArrayBufferView(source: unknown): source is ArrayBufferView {
  return (
    isObject(source) &&
    'byteLength' in source &&
    Number.isFinite(source.byteLength) &&
    'byteOffset' in source &&
    Number.isFinite(source.byteOffset) &&
    'buffer' in source &&
    isArrayBufferLike(source.buffer)
  );
}

/**
 * Narrow source type to `BufferSource`.
 */
export function isBufferSource(source: unknown): source is BufferSource {
  return (
    ArrayBuffer.isView(source) ||
    isArrayBufferLike(source) ||
    isArrayBufferView(source) ||
    isArrayBuffer(source)
  );
}

/**
 * Narrow source type to `IArguments`.
 */
export function isArguments(source: unknown): source is IArguments {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  return isObject(source) && source.toString() === '[object Arguments]';
}
