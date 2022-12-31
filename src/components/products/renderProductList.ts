import { store } from '../../constants';
import { createListItem } from './item';

function renderProductList(): void {
  const { products } = store;

  const list = document.querySelector<HTMLDivElement>('.products-list');
  const noProductsNode = list?.nextElementSibling;

  if (list) {
    list.innerHTML = '';

    if (products.length === 0) {
      noProductsNode?.classList.remove('hidden');
    } else {
      noProductsNode?.classList.add('hidden');
    }

    products.forEach((item) => {
      const listItem = createListItem(item);
      list.append(listItem);
    });
  }
}

export { renderProductList };
