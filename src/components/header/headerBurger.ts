import { handleHistory } from '../../utility';

export function initHeadeBurger(parent: HTMLElement): void {
  const burgerButton = parent.appendChild(document.createElement('div'));
  burgerButton.className = 'burger-button';

  burgerButton.appendChild(document.createElement('span'));

  burgerButton.addEventListener('click', () => {
    handleHistory('/');
  });
}
