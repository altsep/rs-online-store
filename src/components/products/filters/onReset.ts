import { store, INITIAL_PRODUCTS } from '../../../constants';
import { storeSearchString } from '../../../utility';
import { renderProductList } from '../renderProductList';
import { setDisplayMode } from './buttons/setDisplayMode';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSlider } from './updateSlider';

export const onReset = (): void => {
  const { pathname } = window.location;

  store.products = INITIAL_PRODUCTS.slice();

  renderProductList();
  updateItemCount();
  setTimeout(() => {
    updateSlider('info');
  });
  updateProductsFound();
  setDisplayMode(true);

  window.history.replaceState({}, '', pathname);
  storeSearchString('products');
};
