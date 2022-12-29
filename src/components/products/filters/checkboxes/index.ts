import type { Product, Props } from '../../../../constants';
import setItemCount from './setItemCount';
import getCheckedValues from './getCheckedValues';
import { updateURL } from '../../../../utility';

function createCheckboxes(props: Props, name: string): HTMLFieldSetElement {
  const { initialProducts } = props;

  const fieldset = document.createElement('fieldset');
  fieldset.className = 'categories filter';
  fieldset.name = name;
  fieldset.dataset.filterType = 'check';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'categories-legend';

  fieldset.append(legend);

  // Create an array of unique checkbox options from the corresponding property name
  const uniques = [
    ...new Set(initialProducts.map((p) => p[name as keyof Pick<Product, 'category' | 'brand'>].toLowerCase())),
  ];

  uniques.forEach((v) => {
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    const checkboxControls = document.createElement('div');
    checkboxControls.className = 'checkbox-controls';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = name;
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.className = 'label';

    const itemCount = document.createElement('span');
    itemCount.className = 'item-count';

    if (typeof v === 'string') {
      checkbox.id = v.replace(' ', '_');
      checkbox.value = v;

      label.htmlFor = v.replace(' ', '_');
      label.textContent = v;

      itemCount.dataset.value = v;
      const itemCountOptions = { name, value: v, itemCountNode: itemCount };
      setItemCount(props, itemCountOptions);
    }

    checkboxControls.append(checkbox, label);

    checkboxContainer.append(checkboxControls, itemCount);

    fieldset.append(checkboxContainer);
  });

  const handleInput = (): void => {
    const checkedValues = getCheckedValues(fieldset);
    const query = checkedValues.join('|');
    updateURL(name, query);
  };

  fieldset.addEventListener('input', handleInput);

  return fieldset;
}

export default createCheckboxes;
