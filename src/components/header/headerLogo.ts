import logoImg from './img/logo.svg'
export function initHeaderlogo(parentNodeName: string): void{
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const logoContainer = parentNode.appendChild(document.createElement('div'));
    logoContainer.className = 'header_logo';

    const logoImage = logoContainer.appendChild(document.createElement('img'));
    logoImage.src = logoImg;
    logoImage.alt = 'logo';
    const logoTitle = logoContainer.appendChild(document.createElement('h1'));
    logoTitle.textContent = 'OnlineStore';

    logoContainer.addEventListener('click', () => {})
  }
}