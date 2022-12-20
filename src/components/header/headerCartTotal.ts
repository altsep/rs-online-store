export default function initHeaderCartTotal(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const cartTotalContainer = parentNode.appendChild(document.createElement<'div'>('div'));
    cartTotalContainer.className = 'cart-total-container';

    const cartTolalTitle = cartTotalContainer.appendChild(document.createElement<'span'>('span'));
    cartTolalTitle.textContent = `Cart total: $`;
    const cartTotalSum = cartTotalContainer.appendChild(document.createElement<'span'>('span'));
    cartTotalSum.className = 'cart-total';
  }
}