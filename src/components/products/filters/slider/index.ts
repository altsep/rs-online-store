import type { Product, Props } from '../../../../constants';
import { getCurrencyString, updateURL } from '../../../../utility';
import getMinMax from './getMinMax';
import setSliderInfo from './setSliderInfo';

function createSlider({ initialProducts }: Props, name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'slider filter';
  fieldset.name = name;
  fieldset.dataset.filterType = 'range';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'slider-legend';

  const infoContainer = document.createElement('div');
  infoContainer.className = 'slider-info';

  type NumKeys = 'price' | 'discountPercentage' | 'rating' | 'stock';

  const numArr = initialProducts.map((p) => p[name as keyof Pick<Product, NumKeys>]);

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

  infoContainer.append(infoFirst, infoSecond);

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

  fieldset.append(legend, infoContainer, multiRange);

  const handleChange = (): void => {
    const { min, max } = getMinMax(fieldset);
    const value = min === minValue && max === maxValue ? '' : `${min}-${max}`; // Remove search param if min and max are equal to their default values

    updateURL(name, value);
  };

  fieldset.addEventListener('change', handleChange);

  fieldset.addEventListener('input', () => setSliderInfo(fieldset));

  return fieldset;
}

export default createSlider;
