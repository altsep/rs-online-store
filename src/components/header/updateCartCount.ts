import { State } from '../../constants';

export function updateCartCount(state: State): void {
  const s = state;
  const { totalSum, itemsInCart } = s;

  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector('.cart-total');

  if (cartCount && cartTotalSum) {
    cartCount.textContent = '';
    if (s.itemsInCart) {
      cartCount.style.backgroundColor = 'rgb(192, 31, 58)';
      cartCount.textContent = `${itemsInCart}`;
    }
    cartTotalSum.textContent = `${totalSum}`;
  }
}

export default updateCartCount;
