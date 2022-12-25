import { defaults } from '../../../constants';
import { storeSearchString } from '../../../utility';
import renderProductList from '../renderProductList';

function handleForm(form: HTMLFormElement): void {
  const { pathname } = window.location;

  // Store search string in localStorage on change in any element in the list
  form.addEventListener('change', storeSearchString);

  const { state, initialProducts } = defaults; // Is the same as passing as props as its passed by link in the app entry point

  // Rerender cards on input registered in the form element
  const handleInput = (): void => renderProductList(state);

  form.addEventListener('input', handleInput);

  // Rerender cards and empty search on reset
  const handleReset = (): void => {
    state.products = initialProducts.slice();
    renderProductList(state);

    window.history.replaceState({}, '', pathname);
    storeSearchString();
  };

  form.addEventListener('reset', handleReset);
}

export default handleForm;
