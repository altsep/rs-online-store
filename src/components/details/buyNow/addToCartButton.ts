import { Product } from '../../../constants';
import { add } from '../../products/item/controls';
import { isItemInCart } from './isItemInCart';
import { removeFromCart } from './removeFromCart';

export function addToCartButton(product: Product): HTMLButtonElement {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'add-to-cart__btn btn';

  const toggleBtnContent = (): void => {
    if (!isItemInCart(product)) {
      addToCartBtn.textContent = 'Add';
      addToCartBtn.classList.add('add');
      addToCartBtn.classList.remove('remove');
    } else {
      addToCartBtn.textContent = 'Drop';
      addToCartBtn.classList.remove('add');
      addToCartBtn.classList.add('remove');
    }
  };

  toggleBtnContent();

  addToCartBtn.addEventListener('click', () => {
    if (!isItemInCart(product)) {
      add(product);
      toggleBtnContent();
    } else {
      removeFromCart(product);
      toggleBtnContent();
    }
  });

  return addToCartBtn;
}
