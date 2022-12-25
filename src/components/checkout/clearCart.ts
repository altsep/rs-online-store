import { Props, State } from '../../constants';
import updateCartCount from '../header/updateCartCount';

export default function clearCart(state: State): void {
  // state.cart.itemsInCart.amount = 0;
  // state.itemsInCart = 0;
  // state.totalSum = 0;

  for (const key in state.cart) {
    delete state.cart[key];
  }
  state.itemsInCart = 0;
  state.totalSum = 0;
  console.log(state);
  console.log(state.cart);

  updateCartCount(state);
}
