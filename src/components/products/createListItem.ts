import type { Product, State } from '../../constants';
import onProductClick from './onProductClick';
import addToCartBtn from './addToCartBtn';
import { getCurrencyString } from '../../utility';

export default function createListItem(state: State, item: Product): HTMLDivElement {
  const listItem = document.createElement('div');
  listItem.className = 'products__item';

  if (item) {
    const { id, title, price, stock, brand, thumbnail } = item;

    listItem.dataset.id = String(id);

    const textNode = document.createElement('span');
    textNode.className = 'products__item-text';
    const priceStr = getCurrencyString(price);
    textNode.textContent = `${brand} ${title} ${priceStr}`;

    const thumbContainer = document.createElement('div');
    thumbContainer.className = 'products__item-img-container';

    const thumbNode = document.createElement('img');
    thumbNode.className = 'products__item-img img';
    thumbNode.src = thumbnail;

    thumbContainer.append(thumbNode);

    if (stock === 0) {
      textNode.classList.add('out-of-stock');
    }

    listItem.addEventListener('click', onProductClick);

    const btn = addToCartBtn(state, item);

    listItem.append(textNode, thumbContainer, btn);
  }

  return listItem;
}
