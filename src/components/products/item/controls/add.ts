import { Product, store } from '../../../../constants';
import { updateCartCount } from '../../../header/updateCartCount';
import { storeCartProps } from './storeCartProps';
import { updateCartItemNode } from './updateCartItemNode';
import { updateSummary } from './updateSummary';

export const add = (item: Product, icon?: HTMLImageElement): void => {
  const { id } = item;
  const { cart } = store;

  let cartItem = cart.find((el) => el.id === id);

  if (!cartItem) {
    cartItem = { ...item, amount: 0 };
    cart.push(cartItem);

    const removeIcon = icon?.previousElementSibling;
    removeIcon?.classList.remove('invisible');
  }

  const { amount, stock } = cartItem;

  if (amount < stock) {
    cartItem.amount += 1;
  }

  storeCartProps();

  const onCartPage = window.location.pathname.includes('cart');

  if (onCartPage) {
    updateSummary();
  }

  updateCartItemNode(cartItem);

  updateCartCount();
};
