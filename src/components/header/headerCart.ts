import { handleHistory } from '../../utility';
import cartLogoImg from './img/cart.svg'
export function initHeaderCart(parentNodeName: string, count: number): void{
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const cartContainer = parentNode.appendChild(document.createElement('div'));
    cartContainer.className = 'cart-container';

    const cartLogo = cartContainer.appendChild(document.createElement('img'));
    cartLogo.className = 'cart-logo';
    cartLogo.src = cartLogoImg;
    cartLogo.alt = '';

    const cartCount = cartContainer.appendChild(document.createElement('div'));
    cartCount.className = 'cart-count';
    cartCount.textContent = '';
    if (count) {
      cartCount.style.backgroundColor = 'rgb(192, 31, 58)';
      cartCount.textContent = `${count}`;
    }
    const path = '/cart';
    cartContainer.addEventListener(('click'), () => {
      handleHistory(path);
    });
  }
}