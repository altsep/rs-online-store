import { State } from '../../../constants';

function createTextFilter(state: State): HTMLInputElement {
  const input = document.createElement('input');
  input.className = 'filters__form-input-text';
  input.type = 'text';

  return input;
}

export default createTextFilter;
