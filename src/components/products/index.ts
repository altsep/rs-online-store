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

  const filters = createFilters(props);

  productsNode.append(headingNode, filters, listNode);

  if (parentNode) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }

  renderProductList(state);
}

export default renderProducts;
