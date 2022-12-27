import type { Product, Props } from '../../../../constants';
import { getCurrencyString } from '../../../../utility';

function createSlider({ state: { products } }: Props, name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'slider-container filter';
  fieldset.name = name;
  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'slider-legend';

  const info = document.createElement('div');
  info.className = 'slider-info';

  const arr = products.map((p) => p[name as keyof Product]) as number[];

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const minText = document.createElement('span');
  minText.className = 'slider-info-min';
  minText.textContent = name === 'price' ? getCurrencyString(minValue) : String(minValue);

  const maxText = document.createElement('span');
  maxText.className = 'slider-info-max';
  maxText.textContent = name === 'price' ? getCurrencyString(maxValue) : String(maxValue);

  info.append(minText, maxText);

  const multiRange = document.createElement('div');
  multiRange.className = 'multi-range';

  const rangeFirst = document.createElement('input');
  rangeFirst.type = 'range';
  rangeFirst.min = '0';
  rangeFirst.max = '100';
  rangeFirst.value = '0';
  rangeFirst.defaultValue = '0';
  rangeFirst.className = 'slider-range first';
  rangeFirst.name = name;

  const rangeSecond = document.createElement('input');
  rangeSecond.type = 'range';
  rangeSecond.min = '0';
  rangeSecond.max = '100';
  rangeSecond.value = '100';
  rangeSecond.defaultValue = '100';
  rangeSecond.className = 'slider-range second';
  rangeSecond.name = name;

  multiRange.append(rangeFirst, rangeSecond);

  fieldset.append(legend, info, multiRange);

  return fieldset;
}

export default createSlider;
