import { Product, store } from '../../../../constants';
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

    const amountNode = document.querySelector(`.products__item[data-id="${id}"] .products__item-amount`);

    if (amountNode) {
      amountNode.textContent = `Amount: ${amount + 1}`;
    }
  }

  storeCartProps();

  updateCartCount();
};
