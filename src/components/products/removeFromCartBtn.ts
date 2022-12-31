import minus from '../../assets/icons/minus.svg';
import type { Product, State } from '../../constants';
import updateCartCount from '../header/updateCartCount';
import storeCartProps from './storeCartProps';

export default function removeFromCart(state: State, item: Product): HTMLImageElement {
  const { id, price } = item;

  const icon = document.createElement('img');
  icon.className = 'products__item-remove-icon icon invisible';
  icon.title = 'Remove from cart';
  icon.src = minus;

  // https://eslint.org/docs/latest/rules/no-prototype-builtins
  if (Object.prototype.hasOwnProperty.call(state.cart, id)) {
    icon.classList.remove('invisible');
  }

  const handleClick = (): void => {
    if (Object.prototype.hasOwnProperty.call(state.cart, id)) {
      const { amount } = state.cart[id];

      state.cart[id].amount -= 1;
      state.itemsInCart -= 1;
      state.totalSum -= price;

      if (amount === 1) {
        delete state.cart[id];
        icon.classList.add('invisible');
      }
    }

    storeCartProps(state);

    updateCartCount(state);
  };

  icon.addEventListener('click', handleClick);

  return icon;
}
