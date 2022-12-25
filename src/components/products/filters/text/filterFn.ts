import type { Product } from '../../../../constants';

const filterFn = (product: Product, query: string): boolean => {
  const keysToExclude = ['thumbnail', 'images'];
  return Object.keys(product)
    .filter((key) => !keysToExclude.includes(key))
    .some((key) => {
      const value = product[key as keyof Product];

      if (typeof value !== 'undefined' && String(value).toLowerCase().includes(query.toLowerCase())) {
        return true;
      }

      return false;
    });
};

export default filterFn;
