import { setSliderInfo } from './slider/setSliderInfo';
import { setSliderValue } from './slider/setSliderValue';

type Fns = Record<string, (parent: HTMLFieldSetElement) => void>;

const fns: Fns = {
  info: setSliderInfo,
  value: setSliderValue,
};

export const updateSlider = (name: string): void => {
  const sliders = document.querySelectorAll<HTMLFieldSetElement>('.filter.slider');
  const fn = fns[name];
  sliders.forEach((s) => fn(s));
};
