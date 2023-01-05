import { Product } from "../../../constants";
import { addToCart } from "./addToCart";
import { isItemInCart } from "./isItemInCart";
import { removeFromCart } from "./removeFromCart";

export function addToCartButton(product: Product): HTMLButtonElement {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'add-to-cart__btn btn';

  const toggleBtnContent = () => {
    if (!isItemInCart(product)) {
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.classList.add('add');
      addToCartBtn.classList.remove('remove');
    } else {
      addToCartBtn.textContent = 'Drop from cart';
      addToCartBtn.classList.remove('add');
      addToCartBtn.classList.add('remove')
    }
  }

  toggleBtnContent();

  addToCartBtn.addEventListener('click', () => {
    if (!isItemInCart(product)) {
      addToCart(product);
      toggleBtnContent();
    } else {
      removeFromCart(product);
      toggleBtnContent();
    }
  })

  return addToCartBtn;
}