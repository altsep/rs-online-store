import { Product, store } from '../../../../constants';
import { storeSearchString } from '../../../../utility';
import { renderCart } from '../../../cart';
import { updatePageParam } from '../../../cart/updatePageParam';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';
import { updateCartItemNode } from './updateCartItemNode';
import { updateSummary } from './updateSummary';

export const remove = (item: Product, icon: HTMLImageElement): void => {
  const { cart } = store;
  const { id } = item;

  const cartItem = cart.find((el) => el.id === id);

  if (cartItem) {
    const { amount } = cartItem;

    cartItem.amount -= 1;

    const onCartPage = window.location.pathname.includes('cart');

    if (amount === 1) {
      const i = cart.indexOf(cartItem);
      cart.splice(i, 1);

      icon.classList.add('invisible');
    }

    if (onCartPage && amount === 1) {
      updatePageParam();
      storeSearchString('cart');
      renderCart();
    }

    if (onCartPage) {
      updateSummary();
    }

    updateCartItemNode(cartItem);
  }

  storeCartProps();

  updateCartCount();
};
