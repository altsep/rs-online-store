import { Product, store } from '../../../../constants';
import { storeSearchString } from '../../../../utility';
import { renderCart } from '../../../cart';
import { updatePageParam } from '../../../cart/updatePageParam';
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

      const { pathname } = window.location;

      if (pathname.includes('cart')) {
        updatePageParam();
        storeSearchString('cart');
        renderCart();
      }
    }

    const amountNode = document.querySelector(`.products__item[data-id="${id}"] .products__item-amount`);

    if (amountNode) {
      amountNode.textContent = `Amount: ${amount - 1}`;
    }
  }

  storeCartProps();

  updateCartCount();
};
