import { Product } from '../../../constants';
import { handleHistory } from '../../../utility';
import { openPopUp } from '../../checkout/popUpToggle';
import { add } from '../../products/item/controls';
import { isItemInCart } from './isItemInCart';

export function buyNow(product: Product): void {
  if (!isItemInCart(product)) {
    add(product);
  }

  handleHistory('/cart');
  openPopUp();
}
