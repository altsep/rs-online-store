export default function initHeaderCartTotal(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    const cartTotalContainer = parentNode.appendChild(document.createElement('div'));
    cartTotalContainer.className = 'cart-total-container';

    const cartTotalTitle = cartTotalContainer.appendChild(document.createElement('span'));
    cartTotalTitle.className = 'cart-total-text';
    cartTotalTitle.textContent = 'Cart total: ';

    const cartTotalSum = cartTotalContainer.appendChild(document.createElement('span'));
    cartTotalSum.className = 'cart-total';
  }
}
