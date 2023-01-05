import { Product, store } from '../../../../constants';
import { getCurrencyString, storeSearchString } from '../../../../utility';
import { renderCart } from '../../../cart';
import { updatePageParam } from '../../../cart/updatePageParam';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const remove = (item: Product, icon: HTMLImageElement): void => {
  const { cart } = store;
  const { price, id } = item;

  const cartItem = cart.find((el) => el.id === id);

  if (cartItem) {
    const { amount } = cartItem;

    cartItem.amount -= 1;
    store.itemsInCart -= 1;
    store.totalSum -= price;

    if (amount === 1) {
      const i = cart.indexOf(cartItem);
      cart.splice(i, 1);

      icon.classList.add('invisible');

      const { pathname } = window.location;

      if (pathname.includes('cart')) {
        updatePageParam();
        storeSearchString('cart');
        renderCart();
      }
    }

    const itemNode = document.querySelector<HTMLDivElement>(`.products__item[data-id="${id}"]`);
    const amountNode = itemNode?.querySelector<HTMLParagraphElement>('.products__item-amount');
    const priceNode = itemNode?.querySelector<HTMLParagraphElement>('.products__item-price');

    const onCartPage = window.location.pathname.includes('cart');

    if (onCartPage && amountNode && priceNode) {
      amountNode.textContent = `Amount: ${cartItem.amount}`;
      priceNode.textContent = getCurrencyString(price * cartItem.amount);
    }
  }

  storeCartProps();

  updateCartCount();
};
