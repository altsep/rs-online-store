import { Props } from '../../constants';
import createFilters from './filters';
import handleItemCount from './filters/handleItemCount';
import handleSliderInfo from './filters/handleSliderInfo';
import filterFn from './filters/handlingFns';
import handleSearchParams from './handleSearchParams';
import renderProductList from './renderProductList';

function renderProducts(props: Props): void {
  const { state, parentNodeName, initialProducts } = props;

  handleSearchParams(); // Set the search query on every render of this component

  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

  const listNode = document.createElement('div');
  listNode.className = 'products-list';

  const noProductsNode = document.createElement('div');
  noProductsNode.className = 'products-not-found hidden';
  noProductsNode.textContent = 'No products found 🌚';

  const filters = createFilters(props);

  productsNode.append(headingNode, filters, listNode, noProductsNode);

  if (parentNode) {
    parentNode.innerHTML = '';
    parentNode.append(productsNode);
  }

  // Call these methods after rendering the filter block
  filterFn(state, initialProducts);
  handleItemCount();
  handleSliderInfo();

  // Render products after applying filters
  renderProductList(state);
}

export default renderProducts;
