import randomColor from 'randomcolor';
import { handleHistory } from '../../utility';
import logoImg from './img/logo.svg';

export function initHeaderlogo(parent: HTMLElement): void {
  const logoContainer = parent.appendChild(document.createElement('div'));
  logoContainer.className = 'header_logo';

  const logoImage = logoContainer.appendChild(document.createElement('img'));
  logoImage.className = 'header_logo-img';
  logoImage.src = logoImg;
  logoImage.alt = 'logo';

  const logoTitle = logoContainer.appendChild(document.createElement('h1'));
  logoTitle.className = 'header_logo-title';
  logoTitle.textContent = 'OnlineStore';

  const onMouseEnter = (): void => {
    const color: string = randomColor({ hue: 'blue' });
    logoTitle.style.color = color;
  };

  const header = document.querySelector<HTMLElement>('header');

  header?.addEventListener('mouseenter', onMouseEnter);

  const onMouseLeave = (): void => {
    logoTitle.style.color = '';
  };

  header?.addEventListener('mouseleave', onMouseLeave);

  logoContainer.addEventListener('click', () => {
    handleHistory('/products');
  });
}
