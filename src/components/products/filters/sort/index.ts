import { updateURL } from '../../../../utility';
import getSearchParamValue from '../../../../utility/getSearchParamValue';

function createSelect(name: string): HTMLSelectElement {
  const select = document.createElement('select');
  select.className = `${name} filter`;
  select.name = name;
  select.dataset.filterType = 'sort';

  const optionValues = [
    '--Sort--',
    'price asc',
    'price desc',
    'rating asc',
    'rating desc',
    'discount asc',
    'discount desc',
  ];

  const paramValue = getSearchParamValue(name);

  optionValues.forEach((v) => {
    const option = document.createElement('option');
    option.className = 'sort-option option';
    option.value = v === '--Sort--' ? '' : v;
    option.textContent = v;

    if (v === paramValue) {
      option.selected = true;
    }

    select.append(option);
  });

  const handleInput = (e: Event): void => {
    const { selectedOptions } = e.target as HTMLSelectElement;
    const { value } = selectedOptions[0];

    updateURL(name, value);
  };

  select.addEventListener('input', handleInput);

  return select;
}

export default createSelect;
