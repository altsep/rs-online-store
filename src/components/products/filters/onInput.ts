import { renderProductList } from '../renderProductList';
import { filterFn } from './filterFns';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSliderInfo } from './updateSliderInfo';
import { defaults } from '../../../constants';

export const onInput = (): void => {
  const { state, initialProducts } = defaults;

  // Filter product list
  filterFn(state, initialProducts);

  // Update various counters in view
  updateItemCount();
  updateSliderInfo();
  updateProductsFound();

  // Render products after applying filters
  renderProductList(state);
};
