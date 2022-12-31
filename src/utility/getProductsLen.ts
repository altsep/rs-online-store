import type { Product } from '../constants';

export const getProductsLen = (arr: readonly Product[] | Product[], key: string, category: string): number =>
  arr.filter((p) => {
    const v = p[key as keyof Product];
    if (typeof v === 'string' && v.toLowerCase() === category) {
      return true;
    }
    return false;
  }).length;
