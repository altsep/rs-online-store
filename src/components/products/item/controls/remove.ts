import { Product, State } from '../../../../constants';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const remove = (state: State, item: Product, icon: HTMLImageElement): void => {
  const { price, id } = item;

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
