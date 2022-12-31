function renderCheckout(): void {
  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout';

  const headingNode = document.createElement('h2');
  headingNode.className = 'checkout-heading heading';
  headingNode.textContent = 'Checkout';

  checkoutNode.append(headingNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(checkoutNode);
  }
}

export { renderCheckout };
