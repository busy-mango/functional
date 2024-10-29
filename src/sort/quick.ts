import { count } from '@/iterable';
import { clone } from '@/object';

export const quick = <T = unknown>(
  data: T[],
  compare: (pre: T, cur: T) => boolean = Object.is,
): T[] => {
  function run(source: T[]): T[] {
    if (count(source) === 1) {
      return source;
    }

    const prefix: T[] = [];
    const suffix: T[] = [];
    const cursor = source.shift() as T;

    source.forEach(item => {
      (compare(cursor, item) ? prefix : suffix).push(item);
    });

    return run(prefix).concat([cursor]).concat(run(suffix));
  }

  return run(clone(data));
};
