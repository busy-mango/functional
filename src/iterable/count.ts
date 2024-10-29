import { isArray } from '@/guard';

export function count<T>(iterable: Iterable<T>): number {
  if (isArray(iterable)) return iterable.length;
  return [...iterable].reduce(acc => acc + 1, 0);
}
