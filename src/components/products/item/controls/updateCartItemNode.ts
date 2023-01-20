import { CartItem } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';

export function updateCartItemNode(cartItem: CartItem): void {
  const { id, price, amount } = cartItem;

  const itemNode = document.querySelector<HTMLDivElement>(`.products__item[data-id="${id}"]`);
  const amountNode = itemNode?.querySelector<HTMLParagraphElement>('.products__item-amount');
  const priceNode = itemNode?.querySelector<HTMLParagraphElement>('.products__item-price');

  const onCartPage = amountNode && priceNode;

  if (onCartPage) {
    amountNode.textContent = `Amount: ${amount}`;
    priceNode.textContent = getCurrencyString(price * amount);
  }

  if (amount < 1) {
    itemNode?.classList.remove('accented');
  } else {
    itemNode?.classList.add('accented');
  }
}
