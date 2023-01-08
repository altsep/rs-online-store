import { createFilters } from './filters';
import { handleSearchParams } from '../../utility/handleSearchParams';
import { onInput } from './filters/onInput';
import { getSearchParamValue } from '../../utility/getSearchParamValue';

function renderProducts(): void {
  handleSearchParams('products');

  const main = document.querySelector<HTMLDivElement>('.main');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

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
}

export { renderProducts };
