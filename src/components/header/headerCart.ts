import { handleHistory } from '../../utility';
import cartLogoImg from './img/cart.svg';

export default function initHeaderCart(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const cartContainer = parentNode.appendChild(document.createElement<'div'>('div'));
    cartContainer.className = 'cart-container';

    const cartLogo = cartContainer.appendChild(document.createElement<'img'>('img'));
    cartLogo.className = 'cart-logo';
    cartLogo.src = cartLogoImg as string;
    cartLogo.alt = '';

    const cartCount = cartContainer.appendChild(document.createElement<'div'>('div'));
    cartCount.className = 'cart-count';

    cartContainer.addEventListener('click', () => {
      handleHistory('/cart');
    });
  }
}