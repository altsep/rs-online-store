import { store } from '../../constants';
import { getCurrencyString } from '../../utility';

export function updateCartCount(): void {
  const { totalSum, itemsInCart } = store;
  const cartCount = document.querySelector<HTMLDivElement>('.cart-count');
  const cartTotalSum = document.querySelector<HTMLSpanElement>('.cart-total');

  const defaultCartCountBgColor = 'rgb(192, 31, 58)';

  if (cartCount) {
    if (itemsInCart > 0) {
      cartCount.style.backgroundColor = defaultCartCountBgColor;
      cartCount.textContent = String(itemsInCart);
      cartCount.classList.remove('hidden');
    } else {
      cartCount.style.backgroundColor = '';
      cartCount.textContent = '';
      cartCount.classList.add('hidden');
    }
  }

  if (cartTotalSum) {
    const totalSumStr = getCurrencyString(totalSum);
    cartTotalSum.textContent = totalSumStr;
  }

  const cartCountNode = document.querySelector<HTMLHeadingElement>('.cart-count');
  const headerLogoTitle = document.querySelector<HTMLDivElement>('.header_logo-title');

  const onMouseEnter = (): void => {
    if (cartCountNode && headerLogoTitle) {
      cartCountNode.style.backgroundColor = '#fff';
      cartCountNode.style.color = headerLogoTitle.style.color;
    }
  };

  const container = document.querySelector<HTMLDivElement>('.cart-container');

  container?.addEventListener('mouseenter', onMouseEnter);

  const onMouseLeave = (): void => {
    if (cartCountNode && headerLogoTitle) {
      cartCountNode.style.backgroundColor = defaultCartCountBgColor;
      cartCountNode.style.color = '#fff';
    }
  };

  container?.addEventListener('mouseleave', onMouseLeave);
}
