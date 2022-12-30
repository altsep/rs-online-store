import { Props } from '../../constants';
import { handleHistory } from '../../utility';
import updateCartCount from '../header/updateCartCount';

export default function clearCart({ state }: Props): void {
  for (const key in state.cart) {
    delete state.cart[key];
  }
  state.itemsInCart = 0;
  state.totalSum = 0;
  handleHistory('/cart');
  updateCartCount(state);
}
