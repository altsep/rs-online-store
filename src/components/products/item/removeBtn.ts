import type { Product, State } from '../../../constants';
import minus from '../../../assets/icons/minus.svg';
import { remove } from './controls';

export function createRemoveBtn(state: State, item: Product): HTMLImageElement {
  const { id } = item;

  const icon = document.createElement('img');
  icon.className = 'products__item-remove-icon icon invisible';
  icon.title = 'Remove from cart';
  icon.src = minus;

  // https://eslint.org/docs/latest/rules/no-prototype-builtins
  if (Object.prototype.hasOwnProperty.call(state.cart, id)) {
    icon.classList.remove('invisible');
  }

  icon.addEventListener('click', () => remove(state, item, icon));

  return icon;
}
