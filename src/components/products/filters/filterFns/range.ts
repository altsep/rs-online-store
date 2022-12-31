import { Product } from '../../../../constants';

export const range = (products: Product[], name: string, query: string): Product[] => {
  if (query) {
    const [min, max] = query.split('-');

    return products.filter((p): boolean => {
      const value = p[name as keyof Product];

      if (value >= Number(min) && value <= Number(max)) {
        return true;
      }

      return false;
    });
  }

  return products;
};
