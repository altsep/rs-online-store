import { Props } from '../../constants';

function renderCart({ parentNodeName }: Props): void {
  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement<'h2'>('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  cartNode.append(headingNode);

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(cartNode);
  }
}

export default renderCart;
