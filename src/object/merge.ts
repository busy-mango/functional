import { isObject } from '@/guard/isObject';
import { count } from '@/iterable';
import type { MergeDeep } from 'type-fest';
import { clone } from './clone';
import { omit } from './omit';

function iMerge<T extends object, S extends object>(
  target: T,
  source: S,
): MergeDeep<T, S> {
  const merge = (acc: T, src: S): MergeDeep<T, S> => {
    if (count(Object.keys(src)) === 0) {
      return acc as MergeDeep<T, S>;
    }

    const key = Object.keys(src)[0];
    const target = acc[key as keyof T];
    const source = src[key as keyof S];

    if (isObject(source) && isObject(target)) {
      acc[key as keyof T] = merge(target as T, source as S) as T[keyof T];
    } else {
      acc[key as keyof T] = source as unknown as T[keyof T];
    }

    return merge(acc, omit(src, [key as keyof S]) as S);
  };

  return merge(clone(target), clone(source));
}

export function merge<T extends object[]>(...objects: T): T[number] {
  return objects.reduce((acc, obj) => iMerge(acc, obj), {}) as T[number];
}
