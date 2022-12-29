import { updateURL } from '../../../../utility';
import getSearchParamValue from '../../../../utility/getSearchParamValue';

function createTextInput(name: string): HTMLInputElement {
  const input = document.createElement('input');
  input.className = 'search input-text filter';
  input.name = name;
  input.type = 'text';
  input.dataset.filterType = 'text';
  input.placeholder = 'Search';
  input.value = getSearchParamValue(name);

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    updateURL(name, value);
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextInput;
