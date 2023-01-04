import { store } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';
import { storeCartProps } from '../products/item/controls';

export function clearCart(): void {
  const { cart } = store;
  const propNames = Object.getOwnPropertyNames(cart);

  propNames.forEach((name) => {
    delete cart[name];
  });

  store.itemsInCart = 0;
  store.totalSum = 0;
  updateCartCount();
  storeCartProps();
}
