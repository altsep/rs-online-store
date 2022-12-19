import { State } from "../../constants";
import { initHeadeBurger } from "./headerBurger";
import { initHeaderCart } from "./headerCart";
import { initHeaderCartTotal } from "./headerCartTotal";
import { initHeaderlogo } from "./headerLogo";

function renderHeader(state: State): void {
  const parent = document.querySelector<HTMLElement>('header');;

  if (parent) {
    const headerWrapper = parent.appendChild(document.createElement('div'));
    headerWrapper.className = 'wrapper';

    initHeadeBurger('.wrapper');
    initHeaderlogo('.wrapper');
    initHeaderCartTotal('.wrapper', 100.50);
    initHeaderCart('.wrapper', 3);
  }
}

export default renderHeader;
