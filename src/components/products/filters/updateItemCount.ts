import { KeyOfType, Product } from '../../../constants';
import { setItemCount } from './checkboxes/setItemCount';

export const updateItemCount = (): void => {
  const fieldsets = document.querySelectorAll<HTMLFieldSetElement>('.filter.categories');

  fieldsets.forEach((f) => {
    const name = f.name as KeyOfType<Product, string>;
    const itemCountNodes = f.querySelectorAll<HTMLSpanElement>('.item-count');

    itemCountNodes.forEach((itemCountNode) => {
      const { value } = itemCountNode.dataset;

      if (name && value) {
        const itemCountOptions = { name, value, itemCountNode };

        setItemCount(itemCountOptions);
      }
    });
  });
};
