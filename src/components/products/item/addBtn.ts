import type { Product } from '../../../constants';
import plus from '../../../assets/icons/plus.svg';
import { add } from './controls';

export function createAddBtn(item: Product): HTMLImageElement {
  const icon = document.createElement('img');
  icon.className = 'products__item-add-icon icon';
  icon.title = 'Add to cart';
  icon.src = plus;

  icon.addEventListener('click', () => add(item, icon));

  return icon;
}
