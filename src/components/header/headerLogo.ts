import { handleHistory } from '../../utility';
import logoImg from './img/logo.svg';

export default function initHeaderlogo(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const logoContainer = parentNode.appendChild(document.createElement<'div'>('div'));
    logoContainer.className = 'header_logo';

    const logoImage = logoContainer.appendChild(document.createElement<'img'>('img'));
    logoImage.src = logoImg as string;
    logoImage.alt = 'logo';
    const logoTitle = logoContainer.appendChild(document.createElement<'h1'>('h1'));
    logoTitle.textContent = 'OnlineStore';

    logoContainer.addEventListener('click', () => {
      handleHistory('/products');
    });
  }
}
