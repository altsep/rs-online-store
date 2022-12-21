import { State } from '../../constants';

export default function updateCartCount(state: State): void {
  const { totalSum, itemsInCart } = state;

  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector<HTMLSpanElement>('.cart-total');

  if (cartCount) {
    cartCount.style.backgroundColor = itemsInCart > 0 ? 'rgb(192, 31, 58)' : '';
    cartCount.textContent = itemsInCart > 0 ? String(itemsInCart) : '';
  }

  if (cartTotalSum) {
    cartTotalSum.textContent = String(totalSum);
  }
}
