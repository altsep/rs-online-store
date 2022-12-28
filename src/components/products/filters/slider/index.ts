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

  type NumKeys = 'price' | 'discountPercentage' | 'rating' | 'stock';

  const numArr = products.map((p) => p[name as keyof Pick<Product, NumKeys>]);

  const minValue = Math.min(...numArr);
  const maxValue = Math.max(...numArr);
  const minValueStr = String(minValue);
  const maxValueStr = String(maxValue);

  const infoFirst = document.createElement('span');
  infoFirst.className = 'slider-info-text first';
  infoFirst.textContent = name === 'price' ? getCurrencyString(minValue) : minValueStr;

  const infoSecond = document.createElement('span');
  infoSecond.className = 'slider-info-text second';
  infoSecond.textContent = name === 'price' ? getCurrencyString(maxValue) : maxValueStr;

  info.append(infoFirst, infoSecond);

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

  const getMinValue = (): number => Math.min(Number(rangeFirst.value), Number(rangeSecond.value));
  const getMaxValue = (): number => Math.max(Number(rangeFirst.value), Number(rangeSecond.value));

  const handleChange = (): void => {
    const min = getMinValue();
    const max = getMaxValue();
    const value = min === minValue && max === maxValue ? '' : `${min}-${max}`;

    updateURL(name, value);
  };

  fieldset.addEventListener('change', handleChange);

  const handleInput = (): void => {
    const min = getMinValue();
    const max = getMaxValue();

    infoFirst.textContent = name === 'price' ? getCurrencyString(min) : String(min);
    infoSecond.textContent = name === 'price' ? getCurrencyString(max) : String(max);

    if (min === max) {
      info.classList.add('equal');
    } else {
      info.classList.remove('equal');
    }
  };

  fieldset.addEventListener('input', handleInput);

  return fieldset;
}

export default createSlider;
