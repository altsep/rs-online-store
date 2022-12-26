import { updateURL } from '../../../../utility';

function createTextInput(name: string): HTMLInputElement {
  const input = document.createElement('input');
  input.className = 'search input-text filter';
  input.name = name;
  input.id = name;
  input.type = 'text';
  input.placeholder = 'Search';

  const handleInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    updateURL(name, value);
  };

  input.addEventListener('input', handleInput);

  return input;
}

export default createTextInput;
