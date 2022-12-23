import { State } from '../../../constants';
import { updateURL } from '../../../utility';

function createTextFilter(state: State, name: string): HTMLInputElement {
  const input = document.createElement('input');
  input.className = 'filters__form-input-text';
  input.name = name;
  input.type = 'text';

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    updateURL(value, name);
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextFilter;
