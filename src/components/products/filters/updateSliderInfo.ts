import setSliderInfo from './slider/setSliderInfo';

export default (): void => {
  const sliders = document.querySelectorAll<HTMLFieldSetElement>('.filter.slider');
  sliders.forEach((s) => setSliderInfo(s));
};
