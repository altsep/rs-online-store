import { setSliderInfo } from './slider/setSliderInfo';

export const updateSliderInfo = (): void => {
  const sliders = document.querySelectorAll<HTMLFieldSetElement>('.filter.slider');
  sliders.forEach((s) => setSliderInfo(s));
};
