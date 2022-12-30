import { State } from '../../constants';
import initHeadeBurger from './headerBurger';
import initHeaderCart from './headerCart';
import initHeaderCartTotal from './headerCartTotal';
import initHeaderlogo from './headerLogo';
import updateCartCount from './updateCartCount';

function renderHeader(state: State): void {
  const parent = document.querySelector<HTMLElement>('header');

  if (parent) {
    const headerWrapper = parent.appendChild(document.createElement('div'));
    headerWrapper.className = 'wrapper';

    initHeadeBurger(headerWrapper);
    initHeaderlogo(headerWrapper);
    initHeaderCartTotal(headerWrapper);
    initHeaderCart(headerWrapper);

    updateCartCount(state);
  }
}

export default renderHeader;
