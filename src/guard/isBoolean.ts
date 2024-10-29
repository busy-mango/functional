/**
 * Narrow source type to `true`.
 */
export function isTrue(source: unknown): source is true {
  return source === true;
}

/**
 * Narrow source type to `false`.
 */
export function isFalse(source: unknown): source is false {
  return source === false;
}

/**
 * Narrow source type to `boolean`.
 */
export function isBoolean(source: unknown): source is boolean {
  return isTrue(source) || isFalse(source);
}
