import { Product, store } from "../../../constants";

export function isItemInCart(product: Product): boolean {
  const { id } = product;
  return Object.prototype.hasOwnProperty.call(store.cart, id);
}