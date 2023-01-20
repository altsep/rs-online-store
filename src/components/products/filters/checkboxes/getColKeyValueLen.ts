import type { KeyOfType, Product } from '../../../../constants';

export const getColKeyValueLen = (
  arr: Product[] | Readonly<Product[]>,
  key: KeyOfType<Product, string>,
  value: string
): number => arr.filter((el) => el[key] === value).length;
