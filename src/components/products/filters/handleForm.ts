import { storeSearchString } from '../../../utility';
import { onInput } from './onInput';
import { onReset } from './onReset';

function handleForm(form: HTMLFormElement): void {
  form.addEventListener('change', () => storeSearchString('products'));

  form.addEventListener('input', onInput);

  form.addEventListener('change', onInput);

  form.addEventListener('reset', onReset);
}

export { handleForm };
