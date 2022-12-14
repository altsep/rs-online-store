import { Props } from '../../constants';
import { handleHistory } from '../../functions';

function renderProducts({ state, parentNodeName }: Props): void {
  const parentNode = document.querySelector<HTMLElement>(parentNodeName || '');

  const productsNode = document.createElement('div');
  productsNode.className = 'products';
  productsNode.textContent = state ? JSON.stringify(state.products) : 'Products';

  if (parentNode instanceof HTMLElement) {
    parentNode.innerHTML = '';

    parentNode.append(productsNode);
  }

  handleHistory('products', true);
}

export default renderProducts;
