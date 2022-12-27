import type { Product } from '../constants';

const getProductsLen = (arr: Product[], key: string, category: string): number =>
  arr.filter((p) => p[key as keyof Product] === category).length;

export default getProductsLen;
