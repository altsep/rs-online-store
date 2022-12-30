import { storeSearchString } from '../../../utility';
import onInput from './onInput';
import onReset from './onReset';

function handleForm(form: HTMLFormElement): void {
  // Store search string in localStorage on change in any element in the list
  form.addEventListener('change', storeSearchString);

  // Rerender cards on input registered in the form element
  form.addEventListener('input', onInput);

  // Some form controls such as range input could be made to update on change to avoid ipc flooding. Listening to change here allows to not dispatch the input event in separate components in order to call the filter and update the view
  form.addEventListener('change', onInput);

  // Rerender cards and empty search on reset
  form.addEventListener('reset', onReset);
}

export default handleForm;
