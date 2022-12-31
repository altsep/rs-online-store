import { Product, State } from '../../../../constants';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const add = (state: State, item: Product, icon: HTMLImageElement): void => {
  const { id, price } = item;

  // https://eslint.org/docs/latest/rules/no-prototype-builtins
  if (!Object.prototype.hasOwnProperty.call(state.cart, id)) {
    state.cart[id] = { ...item, amount: 0 }; // Add cart item under the specified id if it doesn't exist. Include counter for amount as its property

    const removeIcon = icon.previousElementSibling;
    removeIcon?.classList.remove('invisible');
  }

  const { amount, stock } = state.cart[id];

  if (amount < stock) {
    state.cart[id].amount += 1;
    state.itemsInCart += 1;
    state.totalSum += price;
  }

  storeCartProps(state);

  updateCartCount(state);
};
