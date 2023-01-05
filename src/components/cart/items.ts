import { CartItem } from '../../constants';
import { createListItem } from '../products/item';

function renderItems(parent: HTMLDivElement, cartItems?: CartItem[]): void {
  if (cartItems && cartItems.length) {
    cartItems.forEach((item) => {
      const itemNode = createListItem(item);
      parent.append(itemNode);
    });
  } else {
    parent.textContent = 'Cart is empty';
  }
}

export { renderItems };
