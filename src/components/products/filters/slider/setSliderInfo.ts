import { store } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';
import { getMinMaxProducts } from './getMinMax';

export const setSliderInfo = (parent: HTMLFieldSetElement): void => {
  const { name } = parent;
  const { min, max } = getMinMaxProducts(store.products, name);

  const infoContainer = parent.querySelector<HTMLDivElement>('.slider-info');
  const infoFirst = parent.querySelector<HTMLSpanElement>('.slider-info-text.first');
  const infoSecond = parent.querySelector<HTMLSpanElement>('.slider-info-text.second');

  if (infoFirst && infoSecond) {
    if (min === 0 && max === 0) {
      infoFirst.textContent = 'Not found';
    } else {
      infoFirst.textContent = name === 'price' ? getCurrencyString(min) : String(min);
      infoSecond.textContent = name === 'price' ? getCurrencyString(max) : String(max);
    }
  }

  if (infoContainer) {
    if (min === max) {
      infoContainer.classList.add('equal');
    } else {
      infoContainer.classList.remove('equal');
    }
  }
};
