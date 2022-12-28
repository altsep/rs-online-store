import type { Product, Props } from '../../../../constants';
import { getCurrencyString, updateURL } from '../../../../utility';

function createSlider({ state: { products } }: Props, name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'slider-container filter';
  fieldset.name = name;
  fieldset.dataset.filterType = 'range';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'slider-legend';

  const info = document.createElement('div');
  info.className = 'slider-info';

  const arr = products.map((p) => p[name as keyof Product]) as number[];

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const minValueStr = String(Math.min(...arr));
  const maxValueStr = String(Math.max(...arr));

  const minTextNode = document.createElement('span');
  minTextNode.className = 'slider-info-min';
  minTextNode.textContent = name === 'price' ? getCurrencyString(minValue) : minValueStr;

  const maxTextNode = document.createElement('span');
  maxTextNode.className = 'slider-info-max';
  maxTextNode.textContent = name === 'price' ? getCurrencyString(maxValue) : maxValueStr;

  info.append(minTextNode, maxTextNode);

  const multiRange = document.createElement('div');
  multiRange.className = 'multi-range';

  const rangeFirst = document.createElement('input');
  rangeFirst.type = 'range';
  rangeFirst.min = minValueStr;
  rangeFirst.max = maxValueStr;
  rangeFirst.value = minValueStr;
  rangeFirst.defaultValue = minValueStr; // Used by native form reset
  rangeFirst.className = 'slider-range first';
  rangeFirst.name = name;

  const rangeSecond = document.createElement('input');
  rangeSecond.type = 'range';
  rangeSecond.min = minValueStr;
  rangeSecond.max = maxValueStr;
  rangeSecond.value = maxValueStr;
  rangeSecond.defaultValue = maxValueStr; // Used by native form reset
  rangeSecond.className = 'slider-range second';
  rangeSecond.name = name;

  multiRange.append(rangeFirst, rangeSecond);

  fieldset.append(legend, info, multiRange);

  const handleChange = (): void => {
    const min = Math.min(Number(rangeFirst.value), Number(rangeSecond.value));
    const max = Math.max(Number(rangeFirst.value), Number(rangeSecond.value));

    const value = min === minValue && max === maxValue ? '' : `${min}-${max}`;

    updateURL(name, value);
  };

  fieldset.addEventListener('change', handleChange);

  return fieldset;
}

export default createSlider;
