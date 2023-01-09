import { Product, store } from '../../../constants';
import { updateCartCount } from '../../header/updateCartCount';
import { storeCartProps } from '../../products/item/controls';

// this function removes all amount of product from cart

export function removeFromCart(product: Product): void {
  const { price, id } = product;
  const { cart } = store;

  const cartItem = cart.find((el) => el.id === id);

  if (cartItem) {
    const { amount } = cartItem;
    cartItem.amount -= 0;
    store.itemsInCart -= amount;
    store.totalSum -= price * amount;

    const i = cart.indexOf(cartItem);
    cart.splice(i, 1);
  }

  storeCartProps();
  updateCartCount();
}
