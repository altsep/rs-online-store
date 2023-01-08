import { Product } from '../../../constants';
import { getCurrencyString } from '../../../utility';
import { addToCartButton } from './addToCartButton';
import { buyNow } from './buyNow';

export function createAddToCart(product: Product): HTMLDivElement {
  const addToCartContainer = document.createElement('div');
  addToCartContainer.className = 'product__add-to-cart';

  const { price } = product;

  const productPrice = document.createElement('div');
  productPrice.textContent = getCurrencyString(price);
  productPrice.className = 'product__price';

  const addToCartBtn = addToCartButton(product);

  const buyNowBtn = document.createElement('button');
  buyNowBtn.className = 'btn accented';
  buyNowBtn.textContent = 'buy Now';

  buyNowBtn.addEventListener('click', () => buyNow(product));

  addToCartContainer.append(productPrice, addToCartBtn, buyNowBtn);

  return addToCartContainer;
}
