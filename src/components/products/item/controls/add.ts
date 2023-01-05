import { Product } from '../../../../constants';
import { addToCart } from '../../../details/buyNow/addToCart';
import { isItemInCart } from '../../../details/buyNow/isItemInCart';

export const add = (item: Product, icon: HTMLImageElement): void => {

  if (!isItemInCart(item)) {
    const removeIcon = icon.previousElementSibling;
    removeIcon?.classList.remove('invisible');
  }

  addToCart(item);
};
