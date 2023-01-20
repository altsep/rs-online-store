import { Product } from '../../../constants';
import { createDescriptionItem } from './createDescriptionItem';

export function createDescription(product: Product): HTMLDivElement {
  const container = document.createElement('div');
  container.className = 'product__info_container';

  const { description, discountPercentage, rating, stock, brand, category } = product;

  createDescriptionItem(container, 'Description:', description);
  createDescriptionItem(container, 'Discount:', `${discountPercentage}%`);
  createDescriptionItem(container, 'Rating:', rating);
  createDescriptionItem(container, 'Stock:', stock);
  createDescriptionItem(container, 'Brand:', brand);
  createDescriptionItem(container, 'Category:', category);

  return container;
}
