import type { Product } from '../../constants';

export default function createListItem(item: Product) {
  const listItem = document.createElement<'div'>('div');
  listItem.className = 'products__item';

  if (item) {
    const { title, price, rating, stock, brand, thumbnail } = item;

    const textNode = document.createElement<'span'>('span');
    textNode.className = 'products__item-text';
    textNode.textContent = `${brand} ${title} $${price} ${stock} ${rating}`;

    const thumbNode = document.createElement<'img'>('img');
    thumbNode.className = 'products__item-img img';
    thumbNode.src = thumbnail;

    listItem.append(textNode, thumbNode);
  }

  return listItem;
}
