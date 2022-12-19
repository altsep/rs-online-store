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


  if (parentNode instanceof HTMLElement) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }
}

export default renderProducts;
