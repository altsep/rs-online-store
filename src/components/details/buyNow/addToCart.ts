import { Product, store } from "../../../constants";
import { updateCartCount } from "../../header/updateCartCount";
import { storeCartProps } from "../../products/item/controls";
import { isItemInCart } from "./isItemInCart";

export function addToCart(product: Product): void {
  const { id, price } = product;

  if (!isItemInCart(product)) {
    store.cart[id] = { ...product, amount: 0 }; // Add cart item under the specified id if it doesn't exist. Include counter for amount as its property
  }

  const { amount, stock } = store.cart[id];

  if (amount < stock) {
    store.cart[id].amount += 1;
    store.itemsInCart += 1;
    store.totalSum += price;
  }

  storeCartProps();
  updateCartCount();
}