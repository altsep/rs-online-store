import type { Product, State } from '../../constants';
import onProductClick from './onProductClick';
import addToCartBtn from './addToCartBtn';
import { getCurrencyString } from '../../utility';
import removeFromCart from './removeFromCartBtn';

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
    titleNode.textContent = title;

    const priceNode = document.createElement('h4');
    priceNode.className = 'products__item-price desc';
    const priceStr = getCurrencyString(price);
    priceNode.textContent = priceStr;

    const brandNode = document.createElement('p');
    brandNode.className = 'products__item-brand desc';
    brandNode.textContent = `Brand: ${brand}`;

    const ratingNode = document.createElement('p');
    ratingNode.className = 'products__item-rating desc';
    ratingNode.textContent = `Rating: ${rating}`;

    const discountNode = document.createElement('p');
    discountNode.className = 'products__item-discount desc';
    discountNode.textContent = `Discount: ${discountPercentage}%`;

    const stockNode = document.createElement('p');
    stockNode.className = 'products__item-stock desc';
    stockNode.textContent = `Stock: ${stock}`;

    textContainer.append(titleNode, priceNode, brandNode, ratingNode, discountNode, stockNode);

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

    const btnContainer = document.createElement('div');
    btnContainer.className = 'products__item-btn-container';

    const addBtn = addToCartBtn(state, item);
    const removeBtn = removeFromCart(state, item);

    btnContainer.append(removeBtn, addBtn);

    listItem.append(thumbContainer, textContainer, btnContainer);
  }

  return listItem;
}
