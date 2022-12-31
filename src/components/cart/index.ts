import { Props } from '../../constants';

function renderCart({ state: { cart }, styles, parentNodeName }: Props): void {
  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  const content = document.createElement('div');
  content.className = 'cart-content';
  Object.assign(content.style, styles.json);
  content.textContent = JSON.stringify(cart, null, 4);

  cartNode.append(headingNode, content);

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(cartNode);
  }
}

export { renderCart };
