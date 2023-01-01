import { store } from '../../constants';
import { handleHistory } from '../../utility';
import { updateCartCount } from '../header/updateCartCount';

export function clearCart(): void {
  const { cart } = store;
  const props = Object.getOwnPropertyNames(cart);
  props.forEach((pr) => {
    delete cart[pr];
  });

  store.itemsInCart = 0;
  store.totalSum = 0;
  handleHistory('/cart');
  updateCartCount();
}
