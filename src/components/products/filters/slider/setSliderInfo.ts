import { getCurrencyString } from '../../../../utility';
import getMinMax from './getMinMax';

const setSliderInfo = (parent: HTMLFieldSetElement): void => {
  const { name } = parent;
  const { min, max } = getMinMax(parent);

  const infoContainer = parent.querySelector<HTMLDivElement>('.slider-info');
  const infoFirst = parent.querySelector<HTMLSpanElement>('.slider-info-text.first');
  const infoSecond = parent.querySelector<HTMLSpanElement>('.slider-info-text.second');

  if (infoFirst && infoSecond) {
    infoFirst.textContent = name === 'price' ? getCurrencyString(min) : String(min);
    infoSecond.textContent = name === 'price' ? getCurrencyString(max) : String(max);
  }

  if (infoContainer) {
    if (min === max) {
      infoContainer.classList.add('equal');
    } else {
      infoContainer.classList.remove('equal');
    }
  }
};

export default setSliderInfo;
