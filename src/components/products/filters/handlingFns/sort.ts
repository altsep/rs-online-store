import type { Product } from '../../../../constants';
import { updateURL } from '../../../../utility';

export default (products: Product[]): Product[] => {
  const select = document.querySelector<HTMLSelectElement>('.filter.sort');

  if (select) {
    const { selectedOptions } = select;

    const selected = selectedOptions[0];

    const { value } = selected;

    switch (value) {
      case 'price asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating asc':
        products.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating desc':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount asc':
        products.sort((a, b) => a.discountPercentage - b.discountPercentage);
        break;
      case 'discount desc':
        products.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      default:
        // Restore the initial order
        products.sort((a, b) => a.id - b.id);
        break;
    }

    updateURL('sort', value);
  }

  return products;
};
