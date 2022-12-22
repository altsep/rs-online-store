import { State } from '../../constants';
import { getCurrencyString } from '../../utility';

export default function updateCartCount(state: State): void {
  const { totalSum, itemsInCart } = state;

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
