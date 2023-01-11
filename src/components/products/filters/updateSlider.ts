import { setSliderInfo } from './slider/setSliderInfo';
import { setSliderValue } from './slider/setSliderValue';

const fns: Record<string, (parent: HTMLFieldSetElement) => void> = {
  info: setSliderInfo,
  value: setSliderValue,
};

export const updateSlider = (name: string): void => {
  const sliders = document.querySelectorAll<HTMLFieldSetElement>('.filter.slider');
  const fn = fns[name];
  sliders.forEach((s) => fn(s));
};
