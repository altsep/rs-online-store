import { Product, store } from '../../../../constants';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const remove = (item: Product, icon: HTMLImageElement): void => {
  const { price, id } = item;

  if (Object.prototype.hasOwnProperty.call(store.cart, id)) {
    const { amount } = store.cart[id];

    store.cart[id].amount -= 1;
    store.itemsInCart -= 1;
    store.totalSum -= price;

    if (amount === 1) {
      delete store.cart[id];
      icon.classList.add('invisible');
    }
  }

  storeCartProps();

  updateCartCount();
};
