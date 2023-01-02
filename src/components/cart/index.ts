import { store } from '../../constants';
import { handleSearchParams } from '../../utility';
import { createEmptyCartBtn } from './emptyCart';
import { renderItems } from './items';
import { createLimitItemAmountInput } from './limit';
import { renderPageNumbers } from './pages';

// TODO
// store max items setting and page number in url
// make font size adaptive

function renderCart(): void {
  handleSearchParams('cart'); // Get the search query and update history on rendering this component

  const { cart, maxOnCartPage } = store;
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

  const startingCardsArr = items.map(({ id, title, amount }) => ({ id, title, amount })).slice(0, maxOnCartPage);

  if (items.length) {
    headingNode.after(controls);
  }

  renderItems(content, startingCardsArr);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.innerHTML = '';
    parentNode.append(cartNode);
  }
}

export { renderCart };
