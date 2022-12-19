import { Props } from '../../constants';
import createListItem from './createListItem';

function renderProducts(props: Props): void {
  const {
    state,
    state: { products },
    parentNodeName,
  } = props;

  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement<'div'>('div');
  productsNode.className = 'products';

  const headingNode = document.createElement<'h2'>('h2');
  headingNode.className = 'products-heading heading';
  headingNode.textContent = 'Products';

  const listNode = document.createElement<'div'>('div');
  listNode.className = 'products-list';

  productsNode.append(headingNode, listNode);

  products.forEach((item) => {
    const listItem = createListItem(state, item);
    listNode.append(listItem);
  });

  if (parentNode instanceof HTMLElement) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }
}

export default renderProducts;
