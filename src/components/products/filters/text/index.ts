import type { State } from '../../../../constants';
import { updateURL } from '../../../../utility';
import filterFn from './filterFn';

function createTextInput(state: State, name: string): HTMLInputElement {
  const { products } = state;

  const input = document.createElement('input');
  input.className = 'search input-text';
  input.name = name;
  input.id = name;
  input.type = 'text';
  input.placeholder = 'Search';

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    updateURL(name, value);

    state.products = products.filter((pr) => filterFn(pr, value));
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextInput;
