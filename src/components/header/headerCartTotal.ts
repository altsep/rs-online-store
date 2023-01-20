export function initHeaderCartTotal(parent: HTMLElement): void {
  const cartTotalContainer = document.createElement('div');
  cartTotalContainer.className = 'cart-total-container';

  const cartTotalTitle = document.createElement('span');
  cartTotalTitle.className = 'cart-total-text';
  cartTotalTitle.textContent = 'Cart total: ';

  const cartTotalSum = document.createElement('span');
  cartTotalSum.className = 'cart-total';

  cartTotalContainer.append(cartTotalTitle, cartTotalSum);
  parent.append(cartTotalContainer);
}
