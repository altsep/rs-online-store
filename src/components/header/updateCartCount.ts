import { store } from '../../constants';
import { getCurrencyString } from '../../utility';

export function updateCartCount(): void {
  const { totalSum, itemsInCart } = store;
  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector<HTMLSpanElement>('.cart-total');

  if (cartCount) {
    cartCount.style.backgroundColor = itemsInCart > 0 ? 'rgb(192, 31, 58)' : '';
    cartCount.textContent = itemsInCart > 0 ? String(itemsInCart) : '';
  }

  if (cartTotalSum) {
    const totalSumStr = getCurrencyString(totalSum);
    cartTotalSum.textContent = totalSumStr;
  }
}
