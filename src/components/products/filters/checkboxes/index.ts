import type { Product } from '../../../../constants';
import { Props } from '../../../../constants';

function createCheckboxes({ state: { products }, initialProducts }: Props, name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'categories';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'categories-legend';

  fieldset.append(legend);

  // Create an array of unique checkbox options from the corresponding property name
  const values = [...new Set(initialProducts.map((p) => p[name as keyof Product]))];

  values.forEach((v) => {
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

    const currentLen = products.filter((p) => p[name as keyof Product] === v).length;
    const maxLen = initialProducts.filter((p) => p[name as keyof Product] === v).length;

    itemCount.textContent = `${currentLen}/${maxLen}`;

    if (typeof v === 'string') {
      checkbox.id = v;
      checkbox.value = v;
      label.htmlFor = v;
      label.textContent = v;
    }

    checkboxControls.append(checkbox, label);

    checkboxContainer.append(checkboxControls, itemCount);

    fieldset.append(checkboxContainer);
  });

  return fieldset;
}

export default createCheckboxes;
