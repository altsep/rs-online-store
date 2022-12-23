import { Props } from '../../constants';
import createListItem from './createListItem';

function renderProducts(props: Props): void {
  const {
    state,
    state: { products },
    parentNodeName,
  } = props;

  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';

  const headingNode = document.createElement('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

  const listNode = document.createElement('div');
  listNode.className = 'products-list';

  products.forEach((item) => {
    const listItem = createListItem(state, item);
    listNode.append(listItem);
  });

  productsNode.append(headingNode, listNode);

  if (parentNode instanceof HTMLElement) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }
}

export default renderProducts;
