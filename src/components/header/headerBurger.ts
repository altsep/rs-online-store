import { BurgerMenu } from "./burgerMenu";

export function initHeadeBurger(parentNodeName: string): void{
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const burgerButton = parentNode.appendChild(document.createElement('div'));
    burgerButton.className = 'burger-button';

    burgerButton.appendChild(document.createElement('span'));
    const burgerMenu = BurgerMenu();
    burgerButton.addEventListener('click', () => {
      burgerMenu?.classList.toggle('active');
      burgerButton.classList.toggle('active');
    });
    }
}