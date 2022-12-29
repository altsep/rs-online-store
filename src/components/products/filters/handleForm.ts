import { defaults } from '../../../constants';
import { storeSearchString } from '../../../utility';
import renderProductList from '../renderProductList';
import handleItemCount from './handleItemCount';
import handleSliderInfo from './handleSliderInfo';
import filterFn from './handlingFns';

function handleForm(form: HTMLFormElement): void {
  const { pathname } = window.location;

  // Store search string in localStorage on change in any element in the list
  form.addEventListener('change', storeSearchString);

  const { state, initialProducts } = defaults; // Is the same as passing as props as its passed by link in the app entry point

  // Rerender cards on input registered in the form element
  const handleInput = (): void => {
    filterFn(state, initialProducts);
    renderProductList(state);
    handleItemCount();
  };

  form.addEventListener('input', handleInput);

  // Some form controls such as range input could be made to update on change to avoid ipc flooding. Listening to change here allows to not dispatch the input event in separate components in order to call the filter and update the view
  form.addEventListener('change', handleInput);

  // Rerender cards and empty search on reset
  const handleReset = (): void => {
    // State
    state.products = initialProducts.slice();

    // View
    renderProductList(state);
    handleItemCount();
    setTimeout(handleSliderInfo); // Execute the next event cycle using the default values after the form controls get reset to them

    // Navigation
    window.history.replaceState({}, '', pathname);
    storeSearchString();
  };

  form.addEventListener('reset', handleReset);
}

export default handleForm;
