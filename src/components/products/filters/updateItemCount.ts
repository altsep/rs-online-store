import { defaults } from '../../../constants';
import { setItemCount } from './checkboxes/setItemCount';

export const updateItemCount = (): void => {
  const fieldsets = document.querySelectorAll<HTMLFieldSetElement>('.filter.categories');

  fieldsets.forEach((f) => {
    const { name } = f;
    const itemCountNodes = f.querySelectorAll<HTMLSpanElement>('.item-count');

    itemCountNodes.forEach((itemCountNode) => {
      const { value } = itemCountNode.dataset;

      if (value) {
        const itemCountOptions = { name, value, itemCountNode };

        setItemCount(defaults, itemCountOptions);
      }
    });
  });
};
