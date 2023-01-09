import { Product, store } from '../../../constants';

export function isItemInCart(product: Product): boolean {
  const { id } = product;
  const { cart } = store;
  return cart.findIndex((el) => el.id === id) !== -1;
}
