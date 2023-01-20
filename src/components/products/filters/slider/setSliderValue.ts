import { store } from '../../../../constants';
import { getMinMaxProducts } from './getMinMax';

export const setSliderValue = (parent: HTMLFieldSetElement): void => {
  const first = parent.querySelector<HTMLInputElement>('.slider-range.first');
  const second = parent.querySelector<HTMLInputElement>('.slider-range.second');

  const { min, max } = getMinMaxProducts(store.products, parent.name);

  if (first && second) {
    first.value = String(min);
    second.value = String(max);
  }
};
