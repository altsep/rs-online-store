import { Props, State } from '../../constants';
import updateCartCount from '../header/updateCartCount';

export default function clearCart(state: State): void {

  for (const key in state.cart) {
    delete state.cart[key];
  }
  state.itemsInCart = 0;
  state.totalSum = 0;

  updateCartCount(state);
}
