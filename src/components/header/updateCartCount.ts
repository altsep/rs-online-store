import { State } from '../../constants';

export default function updateCartCount(state: State): void {
  const { totalSum, itemsInCart } = state;

  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector<HTMLSpanElement>('.cart-total');

  if (cartCount && cartTotalSum) {
    cartCount.textContent = '';

    if (itemsInCart > 0) {
      cartCount.style.backgroundColor = 'rgb(192, 31, 58)';
      cartCount.textContent = `${itemsInCart}`;
    }

    cartTotalSum.textContent = `${totalSum}`;
  }
}
