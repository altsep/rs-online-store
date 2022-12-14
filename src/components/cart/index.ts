import { Props } from '../../constants';

function renderCart({ parentNodeName }: Props): void {
  const cartNode = document.createElement('div');
  cartNode.className = 'cart';
  cartNode.textContent = 'Cart';

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(cartNode);
  }
}

export default renderCart;
