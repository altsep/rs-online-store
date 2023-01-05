import { store } from "../../../constants";
import { getCurrencyString } from "../../../utility";
import { addToCartButton } from "./addToCartButton";
import { buyNow } from "./buyNow";

export function createAddToCart(id: number): HTMLDivElement {
  const addToCartContainer = document.createElement('div');
  addToCartContainer.className = 'product__add-to-cart';

  if (!id) {
    addToCartContainer.innerHTML = '';
    return addToCartContainer;
  }

  const { price } = store.products[id - 1];

  const productPrice = document.createElement('div');
  productPrice.textContent = getCurrencyString(price);
  productPrice.className = 'product__price';

  const addToCartBtn = addToCartButton(store.products[id - 1]);

  const buyNowBtn = document.createElement('button');
  buyNowBtn.className = 'btn accented';
  buyNowBtn.textContent = 'buy Now';

  buyNowBtn.addEventListener('click', () => buyNow(store.products[id - 1]));

  addToCartContainer.append(productPrice, addToCartBtn, buyNowBtn);


  return addToCartContainer;
}