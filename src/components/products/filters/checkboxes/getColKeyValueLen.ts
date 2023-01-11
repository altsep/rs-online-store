import type { Product } from '../../../../constants';

export const getColKeyValueLen = (arr: Product[] | Readonly<Product[]>, key: string, value: string): number =>
  arr.filter((p) => {
    const v = p[key as keyof Product];
    if (typeof v === 'string' && v === value) {
      return true;
    }
    return false;
  }).length;
