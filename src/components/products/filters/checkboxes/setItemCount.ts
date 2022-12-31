import { store, INITIAL_PRODUCTS } from '../../../../constants';
import { getProductsLen } from '../../../../utility';

interface Options {
  name: string;
  value: string;
  itemCountNode: HTMLSpanElement;
}

export const setItemCount = ({ name, value, itemCountNode }: Options): void => {
  const currentLen = getProductsLen(store.products, name, value);
  const maxLen = getProductsLen(INITIAL_PRODUCTS, name, value);

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
