import { Product } from "../../../constants";
import { handleHistory } from "../../../utility";
import { openPopUp } from "../../checkout/popUpToggle";
import { addToCart } from "./addToCart";
import { isItemInCart } from "./isItemInCart";

export function buyNow(product: Product): void {
  if (!isItemInCart(product)) {
    addToCart(product);
  }

  handleHistory('/cart');
  openPopUp();
}