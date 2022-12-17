export function initHeaderCartTotal(parentNodeName: string, sum: number): void{
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const cartTotalContainer = parentNode.appendChild(document.createElement('div'));
    cartTotalContainer.className = 'cart-total-container';

    const cartTolalTitle = cartTotalContainer.appendChild(document.createElement('div'));
    cartTolalTitle.className = 'headerLogo';
    cartTolalTitle.textContent = `Cart total: $${sum}`;
  }
}