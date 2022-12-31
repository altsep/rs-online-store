import { Props } from '../../constants';
import { createFilters } from './filters';
import { handleSearchParams } from './handleSearchParams';
import { onInput } from './filters/onInput';
import { getSearchParamValue } from '../../utility/getSearchParamValue';

function renderProducts(props: Props): void {
  handleSearchParams(); // Get the search query and update history on rendering this component

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

  const filters = createFilters(props);

  productsNode.append(headingNode, filters, listNode, noProductsNode);

  if (main) {
    main.innerHTML = '';
    main.append(productsNode);
  }

  // Call the input methods after rendering the filter block
  onInput();
}

export { renderProducts };
