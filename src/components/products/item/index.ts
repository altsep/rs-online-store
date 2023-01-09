import { ProductListItem, store } from '../../../constants';
import { createAddBtn } from './addBtn';
import { createRemoveBtn } from './removeBtn';
import { onProductClick } from './controls';
import { getCurrencyString } from '../../../utility';

export function createListItem(item: ProductListItem, i?: number): HTMLDivElement {
  const listItem = document.createElement('div');
  listItem.className = 'products__item';

  if (i !== undefined) {
    const cartNumber = document.createElement('h4');
    cartNumber.className = 'products__item-cart-num';
    cartNumber.textContent = `${i + 1}.`;
    listItem.append(cartNumber);
  }

  const { id, title, description, price, discountPercentage, rating, stock, brand, thumbnail, amount } = item;

  listItem.dataset.id = String(id);

  const textContainer = document.createElement('div');
  textContainer.className = 'products__item-text-container';

  const titleNode = document.createElement('h4');
  titleNode.className = 'products__item-title';
  titleNode.textContent = title;

  const priceNode = document.createElement('h4');
  priceNode.className = 'products__item-price desc';
  const priceStr = getCurrencyString(price * (amount || 1));
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

  const descriptionNode = document.createElement('p');
  descriptionNode.className = 'products__item-description desc';
  descriptionNode.textContent = description;

  textContainer.append(titleNode, priceNode, brandNode, ratingNode, discountNode, stockNode);

  if (amount) {
    const amountNode = document.createElement('p');
    amountNode.className = 'products__item-amount desc';
    amountNode.textContent = `Amount: ${amount}`;
    textContainer.append(amountNode);
  }

  const thumbContainer = document.createElement('div');
  thumbContainer.className = 'products__item-img-container';

  const thumbNode = document.createElement('img');
  thumbNode.className = 'products__item-img img';
  thumbNode.src = thumbnail;
  thumbNode.alt = '';
  thumbNode.loading = 'lazy';

  thumbContainer.append(thumbNode);

  if (stock === 0) {
    listItem.classList.add('out-of-stock');
  }

  const { cart } = store;

  const inCart = cart.findIndex((el) => el.id === id) !== -1;

  if (inCart) {
    listItem.classList.add('accented');
  }

  listItem.addEventListener('click', onProductClick);

  const btnContainer = document.createElement('div');
  btnContainer.className = 'products__item-icon-container';

  const addBtn = createAddBtn(item);
  const removeBtn = createRemoveBtn(item);

  btnContainer.append(removeBtn, addBtn);

  listItem.append(thumbContainer, textContainer, descriptionNode, btnContainer);

  return listItem;
}
