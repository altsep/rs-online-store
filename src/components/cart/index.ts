import { Props } from '../../constants';
import { handleHistory } from '../../utility';
import renderCheckout from '../checkout';
import { popUpActive } from '../checkout/popUpToggle';

function renderCart({ state: { cart }, parentNodeName }: Props): void {
  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  const content = document.createElement('div');
  content.className = 'cart-content';
  content.style.whiteSpace = 'pre-wrap';
  content.textContent = JSON.stringify(cart, null, 4);

  cartNode.append(headingNode, content);

  // temporary solution for checkout page testing
  const button = document.createElement('button');
  button.textContent = 'buy now';
  cartNode.append(button);
  button.addEventListener(('click'), () => {
    popUpActive();
  })

// ---------

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(cartNode);
  }
}

export default renderCart;
