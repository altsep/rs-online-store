import { store, styles } from '../../constants';
import { openPopUp } from '../checkout/popUpToggle';

function renderCart(): void {
  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  const content = document.createElement('div');
  content.className = 'cart-content';
  Object.assign(content.style, styles.json);
  content.textContent = JSON.stringify(store.cart, null, 4);

  cartNode.append(headingNode, content);

  // temporary solution for checkout page testing
  const button = document.createElement('button');
  button.textContent = 'buy now';
  cartNode.append(button);
  button.addEventListener('click', () => {
    openPopUp();
  });

  // ---------

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(cartNode);
  }
}

export { renderCart };
