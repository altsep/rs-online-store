import type { Product, Props } from '../../constants';
import onProductClick from './onProductClick';

export default function createListItem(item: Product) {
  const listItem = document.createElement<'div'>('div');
  listItem.className = 'products__item';

  if (item) {
    const { id, title, price, rating, stock, brand, thumbnail } = item;

    listItem.dataset.id = String(id);

    const textNode = document.createElement<'span'>('span');
    textNode.className = 'products__item-text';
    textNode.textContent = `${brand} ${title} $${price} ${stock} ${rating}`;

    const thumbNode = document.createElement<'img'>('img');
    thumbNode.className = 'products__item-img img';
    thumbNode.src = thumbnail;

    listItem.addEventListener('click', (e) => onProductClick(e));

    listItem.append(textNode, thumbNode);
  }

  return listItem;
}
