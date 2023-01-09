import { handleHistory } from '../../utility';
import cartLogoImg from './img/cart.svg';

export function initHeaderCart(parent: HTMLElement): void {
  const cartContainer = document.createElement('div');
  cartContainer.className = 'cart-container';

  const cartLogo = document.createElement('img');
  cartLogo.className = 'cart-logo';
  cartLogo.src = cartLogoImg;
  cartLogo.alt = '';

  const cartCount = document.createElement('div');
  cartCount.className = 'cart-count hidden';

  cartContainer.append(cartLogo, cartCount);
  parent.append(cartContainer);

  cartContainer.addEventListener('click', () => {
    handleHistory('/cart');
  });
}
