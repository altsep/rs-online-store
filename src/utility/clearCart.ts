import { store } from '../constants';
import { handleHistory } from '.';
import { updateCartCount } from '../components/header/updateCartCount';
import { storeCartProps } from '../components/products/item/controls';

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
