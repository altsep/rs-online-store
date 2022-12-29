import { defaults } from '../../../constants';
import { storeSearchString } from '../../../utility';
import renderProductList from '../renderProductList';
import updateItemCount from './updateItemCount';
import updateProductsFound from './updateProductsFound';
import updateSliderInfo from './updateSliderInfo';

export default (): void => {
  const { pathname } = window.location;
  const { state, initialProducts } = defaults;

  // State
  state.products = initialProducts.slice();

  // View
  renderProductList(state);
  updateItemCount();
  setTimeout(updateSliderInfo); // Execute during the next event cycle using the default values set through reset
  updateProductsFound();

  // Navigation
  window.history.replaceState({}, '', pathname);
  storeSearchString();
};
