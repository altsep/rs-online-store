import { store } from '../../constants';
import { handleSearchParams } from '../../utility';
import { createEmptyCartBtn } from './emptyCart';
import { createLimitItemAmountInput } from './limit';
import { renderPageNumbers } from './pages';
import { openPopUp } from '../checkout/popUpToggle';

function renderCart(): void {
  handleSearchParams('cart'); // Get the search query and update history on rendering this component

  const { cart } = store;
  const items = Object.values(cart);

  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  const controls = document.createElement('div');
  controls.className = 'cart__controls';

  const emptyCartBtn = createEmptyCartBtn(renderCart);
  const limitItemAmountInput = createLimitItemAmountInput(renderCart);

  controls.append(limitItemAmountInput, emptyCartBtn);

  const content = document.createElement('div');
  content.className = 'cart__content';

  cartNode.append(headingNode);

  renderPageNumbers(cartNode, content);

  cartNode.append(content);

  if (items.length) {
    headingNode.after(controls);
  }

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
    parentNode.innerHTML = '';
    parentNode.append(cartNode);
  }
}

export { renderCart };
