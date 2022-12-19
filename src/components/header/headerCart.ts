import { tempProductsData } from '../../data';
import { onNavigate } from '../../utility';
import renderCart from '../cart';
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

    // open cart
    // todo: update renderCart param
    cartContainer.addEventListener('click', () => renderCart({
        state: {
          products: tempProductsData.splice(0,3),
        },
        parentNodeName: 'main',
        path: '/cart'
    }));
  }
}