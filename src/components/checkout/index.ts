import { Props } from '../../constants';

function renderCheckout({ parentNodeName }: Props): void {
  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout';
  checkoutNode.textContent = 'Checkout';

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(checkoutNode);
  }
}

export default renderCheckout;
