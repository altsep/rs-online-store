import { Props } from '../../constants';
import createFilters from './filters';
import renderProductList from './renderProductList';

function renderProducts(props: Props): void {
  const { state, parentNodeName } = props;

  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

  const listNode = document.createElement('div');
  listNode.className = 'products-list';

  renderProductList(state, listNode);

  const filters = createFilters(state, listNode);

  productsNode.append(headingNode, filters, listNode);

  if (parentNode instanceof HTMLElement) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }
}

export default renderProducts;
