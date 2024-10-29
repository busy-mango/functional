/**
 * ITreeNodeKey
 *
 * 该类型表示树节点键的类型，允许为 string、number 或 bigint 类型的值。
 */
export type ITreeNodeKey = string | number | bigint;

/**
 * KeysWith
 *
 * 该工具类型用于从对象 T 中提取值类型为 E 的键。
 * 具体而言，它会遍历对象 T 的每个键 K，检查对应的值类型是否符合 E：
 * - 若值类型 extends E，则保留键 K。
 * - 否则，返回 never。
 * 最后生成所有符合条件的键的联合类型。
 *
 * @template T - 要处理的对象类型
 * @template E - 要匹配的值类型
 */
export type KeysWith<T, E> = {
  [K in keyof T]: T[K] extends E ? K : never;
}[keyof T];

/**
 * KeysWithout
 *
 * 该工具类型用于从对象 T 中提取值类型不为 E 的键。
 * 它会遍历对象 T 的每个键 K，检查对应的值类型是否不符合 E：
 * - 若值类型不 extends E，则保留键 K。
 * - 否则，返回 never。
 * 最后生成所有不符合 E 的键的联合类型。
 *
 * @template T - 要处理的对象类型
 * @template E - 要排除的值类型
 */
export type KeysWithout<T, E> = {
  [K in keyof T]: T[K] extends E ? never : K;
}[keyof T];

/**
 * KeysWithITreeNodeKey
 *
 * 该工具类型用于从对象 T 中提取那些值类型符合 ITreeNodeKey | null | undefined 的键，
 * 同时排除掉仅为 null 或 undefined 的键。它结合了 KeysWith 和 KeysWithout：
 * - 使用 KeysWith 提取值类型为 ITreeNodeKey | null | undefined 的键。
 * - 使用 KeysWithout 排除值类型仅为 null 或 undefined 的键。
 * 最终生成符合条件的键的联合类型。
 *
 * @template T - 要处理的对象类型
 */
export type KeysWithITreeNodeKey<T> = KeysWith<
  T,
  ITreeNodeKey | null | undefined
> &
  KeysWithout<T, null | undefined>;

/**
 * Defines the fields for a node in the tree structure.
 */
export type ITreeNodeKeys<T, _C> = {
  _id: KeysWith<T, ITreeNodeKey>;
  _pid: KeysWithITreeNodeKey<T>;
  _child: _C;
};

/**
 * Represents a tree node with its children.
 */
export type ITreeNode<T, _C extends string> = T & {
  [X in _C]?: ITreeNode<T, _C>[];
};
