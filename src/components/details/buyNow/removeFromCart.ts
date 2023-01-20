import { Product, store } from '../../../constants';
import { updateCartCount } from '../../header/updateCartCount';
import { storeCartProps } from '../../products/item/controls';

export function removeFromCart(product: Product): void {
  const { id } = product;
  const { cart } = store;

  const cartItem = cart.find((el) => el.id === id);

  if (cartItem) {
    cartItem.amount -= 0;

    const i = cart.indexOf(cartItem);
    cart.splice(i, 1);
  }

  storeCartProps();
  updateCartCount();
}
