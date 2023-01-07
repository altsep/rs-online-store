import { store, CartItem } from '../../constants';
import { createListItem } from '../products/item';

function renderItems(parent: HTMLDivElement, cartItems?: CartItem[]): void {
  if (cartItems && cartItems.length) {
    cartItems.forEach((item) => {
      const i = store.cart.findIndex((el) => el.id === item.id);
      const itemNode = createListItem(item, i);
      parent.append(itemNode);
    });
  } else {
    parent.textContent = 'Cart is empty';
  }
}

export { renderItems };
