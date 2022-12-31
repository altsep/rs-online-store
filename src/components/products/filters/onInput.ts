import { renderProductList } from '../renderProductList';
import { filterFn } from './filterFns';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSliderInfo } from './updateSliderInfo';

export const onInput = (): void => {
  // Filter product list
  filterFn();

  // Update various counters in view
  updateItemCount();
  updateSliderInfo();
  updateProductsFound();

  // Render products after applying filters
  renderProductList();
};
