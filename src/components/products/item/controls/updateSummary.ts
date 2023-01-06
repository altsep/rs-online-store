import { store } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';

export function updateSummary(): void {
  const { itemsInCart, totalSum } = store;

  const productsNode = document.querySelector<HTMLDivElement>('.cart__summary-products');
  const totalNode = document.querySelector<HTMLDivElement>('.cart__summary-total');

  if (productsNode) {
    productsNode.textContent = `Products: ${itemsInCart}`;
  }

  if (totalNode) {
    totalNode.textContent = `Total: ${getCurrencyString(totalSum)}`;
  }
}
