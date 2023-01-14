import { store } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';
import { storeCartProps } from '../products/item/controls';

export function clearCart(): void {
  store.cart = [];
  updateCartCount();
  storeCartProps();
}
