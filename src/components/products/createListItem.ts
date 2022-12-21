import type { Product, State } from '../../constants';
import onProductClick from './onProductClick';
import addToCartBtn from './addToCartBtn';

export default function createListItem(state: State, item: Product): HTMLDivElement {
  const listItem = document.createElement<'div'>('div');
  listItem.className = 'products__item';

  if (item) {
    const { id, title, price, stock, brand, thumbnail } = item;

    listItem.dataset.id = String(id);

    const textNode = document.createElement<'span'>('span');
    textNode.className = 'products__item-text';
    textNode.textContent = `${brand} ${title} $${price}`;

    const thumbNode = document.createElement<'img'>('img');
    thumbNode.className = 'products__item-img img';
    thumbNode.src = thumbnail;

    if (stock === 0) {
      textNode.classList.add('out-of-stock');
    }

    listItem.addEventListener('click', onProductClick);

    const btn = addToCartBtn(state, item);

    listItem.append(textNode, thumbNode, btn);
  }

  return listItem;
}
