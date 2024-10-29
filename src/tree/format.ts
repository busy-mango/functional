import { isNil } from '@/guard';
import { merge } from '@/object';

import type { ITreeNode, ITreeNodeKeys } from './type';

const initial = {
  _id: 'id',
  _pid: 'pid',
  _child: 'children',
};

export const format = <T, _C extends string = (typeof initial)['_child']>(
  source: T[] | ITreeNode<T, _C>[],
  keys?: Partial<ITreeNodeKeys<T, _C>>,
) => {
  const { _id, _pid, _child } = merge(
    initial as ITreeNodeKeys<T, _C>,
    keys ?? {},
  );

  const tree: ITreeNode<T, _C>[] = [];

  const map = new Map<string, ITreeNode<T, _C>>();

  const temp = new Map<string, ITreeNode<T, _C>[]>();

  for (const iterator of source) {
    const id = iterator[_id!] as string;
    const pid = iterator[_pid!] as string | undefined;

    const children = temp.get(id) ?? [];
    const current = {
      ...iterator,
      [_child!]: children,
    } satisfies ITreeNode<T, _C>;

    map.set(id, current);

    if (isNil(pid)) {
      tree.push(current);
      continue;
    }

    const parent = map.get(pid);

    if (isNil(parent)) {
      const temporary = temp.get(pid);

      if (isNil(temporary)) {
        temp.set(pid, [current]);
        continue;
      }

      temporary.push(current);
    } else {
      parent[_child]?.push(current);
    }
  }

  temp.clear();
  map.clear();

  return tree;
};
