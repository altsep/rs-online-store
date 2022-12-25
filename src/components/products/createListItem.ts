import type { Product, State } from '../../constants';
import onProductClick from './onProductClick';
import addToCartBtn from './addToCartBtn';
import { getCurrencyString } from '../../utility';

export default function createListItem(state: State, item: Product): HTMLDivElement {
  const listItem = document.createElement('div');
  listItem.className = 'products__item';

  if (item) {
    const { id, title, price, discountPercentage, rating, stock, brand, thumbnail } = item;

    listItem.dataset.id = String(id);

    const textContainer = document.createElement('div');
    textContainer.className = 'products__item-text-container';

    const titleNode = document.createElement('h4');
    titleNode.className = 'products__item-title';
    const priceStr = getCurrencyString(price);
    titleNode.textContent = `${brand} ${title} ${priceStr}`;

    const ratingNode = document.createElement('p');
    ratingNode.className = 'products__item-rating desc';
    ratingNode.textContent = `Rating: ${rating}`;

    const discountNode = document.createElement('p');
    discountNode.className = 'products__item-discount desc';
    discountNode.textContent = `Discount: ${discountPercentage}%`;

    textContainer.append(titleNode, ratingNode, discountNode);

    const thumbContainer = document.createElement('div');
    thumbContainer.className = 'products__item-img-container';

    const thumbNode = document.createElement('img');
    thumbNode.className = 'products__item-img img';
    thumbNode.src = thumbnail;
    thumbNode.alt = '';

    thumbContainer.append(thumbNode);

    if (stock === 0) {
      listItem.classList.add('out-of-stock');
    }

    listItem.addEventListener('click', onProductClick);

    const btn = addToCartBtn(state, item);

    listItem.append(textContainer, thumbContainer, btn);
  }

  return listItem;
}
