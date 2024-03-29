import { createFilters } from './filters';
import { retrieveSearchParams } from '../../utility/retrieveSearchParams';
import { onInput } from './filters/onInput';
import { getSearchParamValue } from '../../utility/getSearchParamValue';
import { updateSlider } from './filters/updateSlider';

function renderProducts(): void {
  retrieveSearchParams('products');

  const main = document.querySelector<HTMLDivElement>('.main');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';
  productsNode.dataset.testid = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';
  headingNode.dataset.testid = 'products-heading';

  const listNode = document.createElement('div');
  listNode.className = 'products-list';

  const productsDisplayMode = getSearchParamValue('display');

  if (productsDisplayMode === 'list') {
    listNode.classList.add('display--list');
  }

  const noProductsNode = document.createElement('div');
  noProductsNode.className = 'products-not-found hidden';
  noProductsNode.textContent = 'No products found 🌚';

  const filters = createFilters();

  productsNode.append(headingNode, filters, listNode, noProductsNode);

  if (main) {
    main.innerHTML = '';
    main.append(productsNode);
  }

  onInput();
  updateSlider('value');
}

export { renderProducts };
