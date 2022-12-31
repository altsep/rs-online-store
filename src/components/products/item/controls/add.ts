import { Product, store } from '../../../../constants';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const add = (item: Product, icon: HTMLImageElement): void => {
  const { id, price } = item;

  // https://eslint.org/docs/latest/rules/no-prototype-builtins
  if (!Object.prototype.hasOwnProperty.call(store.cart, id)) {
    store.cart[id] = { ...item, amount: 0 }; // Add cart item under the specified id if it doesn't exist. Include counter for amount as its property

    const removeIcon = icon.previousElementSibling;
    removeIcon?.classList.remove('invisible');
  }

  const { amount, stock } = store.cart[id];

  if (amount < stock) {
    store.cart[id].amount += 1;
    store.itemsInCart += 1;
    store.totalSum += price;
  }

  storeCartProps();

  updateCartCount();
};
