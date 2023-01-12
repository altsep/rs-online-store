import { store } from '../../constants';
import { retrieveSearchParams } from '../../utility';
import { createEmptyCartBtn } from './emptyCart';
import { createLimitItemAmountInput } from './limit';
import { renderPageNumbers } from './pages';
import { renderSummary } from './summary';

function renderCart(): void {
  retrieveSearchParams('cart');

  const { cart } = store;
  const items = Object.values(cart);

  const cartNode = document.createElement('div');
  cartNode.className = 'cart';

  const headingNode = document.createElement('h2');
  headingNode.className = 'cart-heading heading';
  headingNode.textContent = 'Cart';

  const controls = document.createElement('div');
  controls.className = 'cart__controls';

  const limitContainer = document.createElement('div');
  limitContainer.className = 'cart__limit';

  const emptyCartBtn = createEmptyCartBtn(renderCart);
  const limitItemAmountInput = createLimitItemAmountInput(renderCart);

  limitContainer.append(limitItemAmountInput, emptyCartBtn);
  controls.append(limitContainer);

  renderSummary(controls);

  const content = document.createElement('div');
  content.className = 'cart__content';

  cartNode.append(headingNode);

  renderPageNumbers(cartNode, content);

  cartNode.append(content);

  if (items.length) {
    headingNode.after(controls);
  }

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.innerHTML = '';
    parentNode.append(cartNode);
  }
}

export { renderCart };
