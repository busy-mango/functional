/**
 * Narrow source type to `symbol`.
 */
export function isSymbol(source: unknown): source is symbol {
  return typeof source === 'symbol';
}
