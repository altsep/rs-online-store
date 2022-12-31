import { Props } from '../../constants';
import { handleHistory } from '../../utility';
import updateCartCount from '../header/updateCartCount';

export default function clearCart({ state }: Props): void {
  const props = Object.getOwnPropertyNames(state.cart);
  props.forEach((pr) => {
    delete state.cart[pr];
  });

  state.itemsInCart = 0;
  state.totalSum = 0;
  handleHistory('/cart');
  updateCartCount(state);
}
