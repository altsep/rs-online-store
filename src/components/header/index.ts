import { initHeadeBurger } from './headerBurger';
import { initHeaderCart } from './headerCart';
import { initHeaderCartTotal } from './headerCartTotal';
import { initHeaderlogo } from './headerLogo';
import { updateCartCount } from './updateCartCount';

function renderHeader(): void {
  const parent = document.querySelector<HTMLElement>('header');

  if (parent) {
    const headerWrapper = parent.appendChild(document.createElement('div'));
    headerWrapper.className = 'wrapper';

    initHeadeBurger(headerWrapper);
    initHeaderlogo(headerWrapper);
    initHeaderCartTotal(headerWrapper);
    initHeaderCart(headerWrapper);

    updateCartCount();
  }
}

export { renderHeader };
