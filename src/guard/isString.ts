/**
 * Narrow source type to `String`.
 */
export function isString(source: unknown): source is string {
  return typeof source === 'string' || source instanceof String;
}

/**
 * Narrow source type to `String` && Check is empty string.
 */
export function isEmptyString(source: unknown): source is '' {
  return isString(source) && source.trim() === '';
}

/**
 * Narrow source type to `String` && Check is not empty string.
 */
export function isNonEmptyString(
  source: unknown,
): source is Exclude<string, ''> {
  return isString(source) && source.trim() !== '';
}
