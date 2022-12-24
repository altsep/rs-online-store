import type { State } from '../../constants';
import createListItem from './createListItem';

function renderProductList(state: State, parent: HTMLDivElement): void {
  const { products } = state;

  parent.innerHTML = '';

  products.forEach((item) => {
    const listItem = createListItem(state, item);
    parent.append(listItem);
  });
}

export default renderProductList;
