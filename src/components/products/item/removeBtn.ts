import { Product } from '../../../constants';
import minus from '../../../assets/icons/minus.svg';
import { remove } from './controls';
import { isItemInCart } from '../../details/buyNow/isItemInCart';

export function createRemoveBtn(item: Product): HTMLImageElement {
  const { id } = item;

  const icon = document.createElement('img');
  icon.className = 'products__item-remove-icon icon invisible';
  icon.title = 'Remove from cart';
  icon.src = minus;

  if (isItemInCart(item)) {
    icon.classList.remove('invisible');
  }

  icon.addEventListener('click', () => remove(item, icon));

  return icon;
}
