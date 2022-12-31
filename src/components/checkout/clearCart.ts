import { store } from '../../constants';
import { handleHistory } from '../../utility';
import { updateCartCount } from '../header/updateCartCount';

export default function clearCart(): void {
  let { cart } = store;
  const props = Object.getOwnPropertyNames(cart);
  props.forEach((pr) => {
    delete cart[pr];
  });

  store.itemsInCart = 0;
  store.totalSum = 0;
  handleHistory('/cart');
  updateCartCount();
}
