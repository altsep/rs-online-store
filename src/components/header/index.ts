import { initHeadeBurger } from "./headerBurger";
import { initHeaderCart } from "./headerCart";
import { initHeaderCartTotal } from "./headerCartTotal";
import { initHeaderlogo } from "./headerLogo";

function renderHeader(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const headerWrapper = parentNode.appendChild(document.createElement('div'));
    headerWrapper.className = 'wrapper';

    initHeadeBurger('.wrapper');
    initHeaderlogo('.wrapper');
    initHeaderCartTotal('.wrapper', 100.50);
    initHeaderCart('.wrapper', 3);
  }
}

export default renderHeader;
