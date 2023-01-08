import { store } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';
import { getDiscountedSum } from '../../../cart/getDiscountedSum';

export function updateSummary(): void {
  const { itemsInCart, totalSum } = store;

  const productsNode = document.querySelector<HTMLDivElement>('.cart__summary-products');
  const totalNode = document.querySelector<HTMLDivElement>('.cart__summary-total');
  const totalDiscountedNode = document.querySelector<HTMLDivElement>('.cart__summary-total-discount');

  if (productsNode) {
    productsNode.textContent = `Products: ${itemsInCart}`;
  }

  if (totalNode) {
    totalNode.textContent = `Total: ${getCurrencyString(totalSum)}`;
  }

  if (totalDiscountedNode) {
    const discountedSum = getDiscountedSum(store.totalSum);
    totalDiscountedNode.textContent = `Total: ${getCurrencyString(discountedSum)}`;
  }
}
