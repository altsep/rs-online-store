import { renderProductList } from '../renderProductList';
import { filterFn } from './filterFns';
import { updateItemCount } from './updateItemCount';
import { updateProductsFound } from './updateProductsFound';
import { updateSlider } from './updateSlider';

export const onInput = (e?: Event): void => {
  filterFn();

  updateItemCount();
  updateProductsFound();
  setTimeout(() => {
    updateSlider('info');
  });

  if (e?.target instanceof HTMLInputElement && e.target.type !== 'range') {
    updateSlider('value');
  }

  renderProductList();
};
