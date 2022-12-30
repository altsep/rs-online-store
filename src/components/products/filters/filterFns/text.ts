import { Product } from '../../../../constants';

export default (products: Product[], _name: string, query: string): Product[] => {
  return products.filter((p): boolean => {
    const keysToExclude = ['thumbnail', 'images'];
    return Object.keys(p)
      .filter((key) => !keysToExclude.includes(key))
      .some((key) => {
        const value = p[key as keyof Product];

        if (String(value).toLowerCase().includes(query.toLowerCase())) {
          return true;
        }

        return false;
      });
  });
};
