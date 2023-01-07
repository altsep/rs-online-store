import { store } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';
import { storeCartProps } from '../products/item/controls';

export function clearCart(): void {
  store.cart = [];
  store.itemsInCart = 0;
  store.totalSum = 0;
  updateCartCount();
  storeCartProps();
}
