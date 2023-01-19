import { store, INITIAL_PRODUCTS, KeyOfType, Product } from '../../../../constants';
import { getColKeyValueLen } from './getColKeyValueLen';

interface Options {
  name: KeyOfType<Product, string>;
  value: string;
  itemCountNode: HTMLSpanElement;
}

export const setItemCount = ({ name, value, itemCountNode }: Options): void => {
  const currentLen = getColKeyValueLen(store.products, name, value);
  const maxLen = getColKeyValueLen(INITIAL_PRODUCTS, name, value);

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
