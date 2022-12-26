import type { Product } from '../../../../constants';
import { Props } from '../../../../constants';

function createCheckboxes({ state: { products }, initialProducts }: Props, name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'categories filter';
  fieldset.name = name;

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'categories-legend';

  fieldset.append(legend);

  // Create an array of unique checkbox options from the corresponding property name
  const values = [...new Set(initialProducts.map((p) => p[name as keyof Product]))];

  const getProductsLen = (arr: Product[], category: string): number =>
    arr.filter((p) => p[name as keyof Product] === category).length;

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

    if (typeof v === 'string') {
      checkbox.id = v;
      checkbox.value = v;
      label.htmlFor = v;
      label.textContent = v;

      itemCount.id = v;
      const currentLen = getProductsLen(products, v);
      const maxLen = getProductsLen(initialProducts, v);
      itemCount.textContent = `${currentLen}/${maxLen}`;
    }

    checkboxControls.append(checkbox, label);

    checkboxContainer.append(checkboxControls, itemCount);

    fieldset.append(checkboxContainer);
  });

  return fieldset;
}

export default createCheckboxes;
