import { Product } from '../../../../constants';

export default (products: Product[], _name: string, query: string): Product[] => {
  return products.filter((product: Product): boolean => {
    const keysToExclude = ['thumbnail', 'images'];
    return Object.keys(product)
      .filter((key) => !keysToExclude.includes(key))
      .some((key) => {
        const value = product[key as keyof Product];

        if (String(value).toLowerCase().includes(query.toLowerCase())) {
          return true;
        }

        return false;
      });
  });
};
