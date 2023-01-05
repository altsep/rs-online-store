import { Product, store } from '../../../constants';
import minus from '../../../assets/icons/minus.svg';
import { remove } from './controls';

export function createRemoveBtn(item: Product): HTMLImageElement {
  const { cart } = store;
  const { id } = item;

  const icon = document.createElement('img');
  icon.className = 'products__item-remove-icon icon invisible';
  icon.title = 'Remove from cart';
  icon.src = minus;

  // https://eslint.org/docs/latest/rules/no-prototype-builtins
  if (cart.findIndex((el) => el.id === id) !== -1) {
    icon.classList.remove('invisible');
  }

  icon.addEventListener('click', () => remove(item, icon));

  return icon;
}
