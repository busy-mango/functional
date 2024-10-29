import { count } from '@/iterable';
import { clone } from './clone';

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @param data - The object.
 * @param keys - The property names.
 * @signature
 *    R.omit(obj, names);
 * @category Object
 */
export function omit<T extends object, K extends keyof T>(
  data: T,
  keys: ReadonlyArray<K>,
): Omit<T, K> {
  const res = clone(data);

  if (count(keys) === 1) {
    const { [keys[0]]: _, ...remain } = res;
    return remain;
  }

  keys.forEach(key => {
    Reflect.has(res, key) && delete res[key];
  });

  return res;
}
