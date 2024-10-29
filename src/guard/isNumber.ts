/**
 * Narrow source type to `Number`.
 * @note Exclude `Infinity`, `-Infinity`, and `NaN`.
 */
export function isNumber(source: unknown): source is number {
  return typeof source === 'number' || source instanceof Number;
}

/**
 * Narrow source type to `number` and `source` is int.
 */
export function isInt(source: unknown): source is number {
  return isNumber(source) && source % 1 === 0;
}

/**
 * Narrow source type to `number` and `source` is float.
 */
export const isFloat = (source: unknown): source is number => {
  return isNumber(source) && source % 1 !== 0;
};

/**
 * Narrow source type to `bigint`.
 */
export function isBigInt(source: unknown): source is bigint {
  return typeof source === 'bigint';
}

/**
 * Narrow source type to `Number` && Check is integer.
 */
export function isInteger(source: unknown): source is number {
  return Number.isInteger(source);
}

/**
 * Narrow source type to `Number` && Check is safe integer.
 */
export function isSafeInteger(source: unknown): source is number {
  return Number.isSafeInteger(source);
}
