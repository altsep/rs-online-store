import type { Product } from '../../constants';
import onProductClick from './onProductClick';

export default function createListItem(item: Product) {
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

    listItem.append(textNode, thumbNode);
  }

  return listItem;
}
