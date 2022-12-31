import type { Props } from '../../../../constants';
import { getProductsLen } from '../../../../utility';

interface Options {
  name: string;
  value: string;
  itemCountNode: HTMLSpanElement;
}

export const setItemCount = (
  { state: { products }, initialProducts }: Props,
  { name, value, itemCountNode }: Options
): void => {
  const currentLen = getProductsLen(products, name, value);
  const maxLen = getProductsLen(initialProducts, name, value);

  if (itemCountNode) {
    itemCountNode.textContent = `${currentLen}/${maxLen}`;

    const parent = itemCountNode.parentElement;

    if (currentLen === 0) {
      parent?.classList.add('grayed-out');
    } else {
      parent?.classList.remove('grayed-out');
    }
  }
};
