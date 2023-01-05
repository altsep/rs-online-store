import { Product, store } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';

export const add = (item: Product, icon: HTMLImageElement): void => {
  const { id, price } = item;
  const { cart } = store;

  let cartItem = cart.find((el) => el.id === id);

  if (!cartItem) {
    cartItem = { ...item, amount: 0 };
    cart.push(cartItem);

    const removeIcon = icon.previousElementSibling;
    removeIcon?.classList.remove('invisible');
  }

  const { amount, stock } = cartItem;

  if (amount < stock) {
    cartItem.amount += 1;
    store.itemsInCart += 1;
    store.totalSum += price;

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
