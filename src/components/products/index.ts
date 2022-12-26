import { Props } from '../../constants';
import createFilters from './filters';
import filterFn from './filters/handlingFns';
import renderProductList from './renderProductList';

function renderProducts(props: Props): void {
  const { state, parentNodeName, initialProducts } = props;

  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

  const listNode = document.createElement('div');
  listNode.className = 'products-list';

  const filters = createFilters(props);

  productsNode.append(headingNode, filters, listNode);

  if (parentNode) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }

  filterFn(state, initialProducts);
  renderProductList(state);
}

export default renderProducts;
