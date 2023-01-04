import { store } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';
import { storeCartProps } from '../products/item/controls';

export function clearCart(): void {
  const { cart } = store;
  const props = Object.getOwnPropertyNames(cart);
  props.forEach((pr) => {
    delete cart[pr];
  });

  store.itemsInCart = 0;
  store.totalSum = 0;
  updateCartCount();
  storeCartProps();
}
