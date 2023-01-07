import { renderProductList } from '../renderProductList';
import { filterFn } from './filterFns';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSliderInfo } from './updateSliderInfo';

export const onInput = (): void => {
  filterFn();

  updateItemCount();
  updateSliderInfo();
  updateProductsFound();

  renderProductList();
};
