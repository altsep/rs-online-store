import { Product, store } from "../../../constants";
import { updateCartCount } from "../../header/updateCartCount";
import { storeCartProps } from "../../products/item/controls";

// this function removes all amount of product from cart

export function removeFromCart(product: Product): void {
  const { price, id } = product;

  const { amount } = store.cart[id];

  store.cart[id].amount = 0;
  store.itemsInCart -= amount;
  store.totalSum -= price * amount;
  delete store.cart[id];

  storeCartProps();
  updateCartCount();
}