import { handleHistory } from '../../utility';
import cartLogoImg from './img/cart.svg';

export function initHeaderCart(parent: HTMLElement): void {
  const cartContainer = parent.appendChild(document.createElement('div'));
  cartContainer.className = 'cart-container';

  const cartLogo = cartContainer.appendChild(document.createElement('img'));
  cartLogo.className = 'cart-logo';
  cartLogo.src = cartLogoImg;
  cartLogo.alt = '';

  const cartCount = cartContainer.appendChild(document.createElement('div'));
  cartCount.className = 'cart-count';

  cartContainer.addEventListener('click', () => {
    handleHistory('/cart');
  });
}
