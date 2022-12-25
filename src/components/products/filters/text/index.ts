import type { State } from '../../../../constants';
import { updateURL } from '../../../../utility';
import renderProductList from '../../renderProductList';
import filter from './filter';

function createTextInput(state: State, name: string, listNode: HTMLDivElement): HTMLInputElement {
  const { products } = state;
  const input = document.createElement('input');
  input.className = 'filters__form-input-text';
  input.name = name;
  input.type = 'text';

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    updateURL(value, name);

    state.products = products.filter((pr) => filter(pr, value));

    renderProductList(state, listNode);
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextInput;
