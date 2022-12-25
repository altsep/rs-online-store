import type { State } from '../../constants';
import createListItem from './createListItem';

function renderProductList(state: State): void {
  const { products } = state;

  const parent = document.querySelector<HTMLDivElement>('.products-list');

  if (parent) {
    parent.innerHTML = '';

    products.forEach((item) => {
      const listItem = createListItem(state, item);
      parent.append(listItem);
    });
  }
}

export default renderProductList;
