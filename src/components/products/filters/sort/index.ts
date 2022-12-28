import { updateURL } from '../../../../utility';

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

  optionValues.forEach((v) => {
    const option = document.createElement('option');
    option.value = v === '--Sort--' ? '' : v;
    option.textContent = v;
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
