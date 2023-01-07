import { INITIAL_PRODUCTS, Product } from '../../../../constants';
import { setItemCount } from './setItemCount';
import { getCheckedValues } from './getCheckedValues';
import { updateURL } from '../../../../utility';
import { getSearchParamValue } from '../../../../utility/getSearchParamValue';

function createCheckboxes(name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'categories filter';
  fieldset.name = name;
  fieldset.dataset.filterType = 'check';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'categories-legend';

  fieldset.append(legend);

  const uniques = [
    ...new Set(INITIAL_PRODUCTS.map((p) => p[name as keyof Pick<Product, 'category' | 'brand'>].toLowerCase())),
  ];

  const checkedParamValues = getSearchParamValue(name).split('|');

  uniques.forEach((v) => {
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    const checkboxControls = document.createElement('div');
    checkboxControls.className = 'checkbox-controls';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = name;
    checkbox.className = 'checkbox';

    if (checkedParamValues.includes(v)) {
      checkbox.checked = true;
    }

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
      setItemCount(itemCountOptions);
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

export { createCheckboxes };
