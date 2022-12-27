import { defaults } from '../../../constants';
import setItemCount from './checkboxes/setItemCount';

export default (): void => {
  const fieldsets = document.querySelectorAll<HTMLFieldSetElement>('.filter.categories');

  fieldsets.forEach((f) => {
    const { name } = f;
    const itemCountNodes = f.querySelectorAll<HTMLSpanElement>('.item-count');

    itemCountNodes.forEach((itemCountNode) => {
      const { id } = itemCountNode;

      if (itemCountNode) {
        const itemCountOptions = { name, value: id, itemCountNode };

        setItemCount(defaults, itemCountOptions);
      }
    });
  });
};
