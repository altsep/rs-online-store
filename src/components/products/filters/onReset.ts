import { store, INITIAL_PRODUCTS } from '../../../constants';
import { storeSearchString } from '../../../utility';
import { renderProductList } from '../renderProductList';
import { setDisplayMode } from './buttons/setDisplayMode';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSliderInfo } from './updateSliderInfo';

export const onReset = (): void => {
  const { pathname } = window.location;

  // store
  store.products = INITIAL_PRODUCTS.slice();

  // View
  renderProductList();
  updateItemCount();
  setTimeout(updateSliderInfo); // Execute during the next event cycle using the default values set through reset
  updateProductsFound();
  setDisplayMode(true);

  // Navigation
  window.history.replaceState({}, '', pathname);
  storeSearchString();
};
