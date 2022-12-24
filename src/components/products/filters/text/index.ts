import type { State } from '../../../../constants';
import { updateURL } from '../../../../utility';
import renderProductList from '../../renderProductList';
import filter from './filter';

function createTextInput(state: State, name: string): HTMLInputElement {
  const input = document.createElement('input');
  input.className = 'search input-text';
  input.name = name;
  input.id = name;
  input.type = 'text';
  input.placeholder = 'Search';

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    updateURL(value, name);

    state.products = state.products.filter((pr) => filter(pr, value));

    renderProductList(state);
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextInput;
