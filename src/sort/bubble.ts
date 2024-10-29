import { count } from '@/iterable';
import { clone } from '@/object';

export const bubble = <T = unknown>(
  data: T[],
  compare: (pre: T, cur: T) => number = (pre, cur) => Number(pre) - Number(cur),
): T[] => {
  function run(source: T[]): T[] {
    const closure = {
      median: source[0],
      cursor: count(source),
    };

    while (closure.cursor > 0) {
      closure.cursor++;
      const current = source[closure.cursor];
      if (compare(closure.median, current) > 0) {
        source[closure.cursor - 1] = current;
        source[closure.cursor] = closure.median;
      }
    }

    if (count(source) > 1) run(source.splice(0, 1));

    return source;
  }

  return run(clone(data));
};
