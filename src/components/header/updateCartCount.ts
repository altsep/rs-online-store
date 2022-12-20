import { State } from '../../constants';

export default function updateCartCount(state: State): void {
  const s = state;
  const { totalSum, itemsInCart } = s;

  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector<HTMLSpanElement>('.cart-total');

  if (cartCount && cartTotalSum) {
    cartCount.textContent = '';
    if (itemsInCart) {
      cartCount.style.backgroundColor = 'rgb(192, 31, 58)';
      cartCount.textContent = `${itemsInCart}`;
    }
    cartTotalSum.textContent = `${totalSum}`;
  }
}