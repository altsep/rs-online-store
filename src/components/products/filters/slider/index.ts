import { INITIAL_PRODUCTS } from '../../../../constants';
import { getCurrencyString, updateSearchParams } from '../../../../utility';
import { getSearchParamValue } from '../../../../utility/getSearchParamValue';
import { getMinMaxProducts, getMinMaxRangeValues } from './getMinMax';

function createSlider(name: string): HTMLFieldSetElement {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'slider filter';
  fieldset.name = name;
  fieldset.dataset.filterType = 'range';

  const legend = document.createElement('legend');
  legend.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
  legend.className = 'slider-legend';

  const infoContainer = document.createElement('div');
  infoContainer.className = 'slider-info';

  const { min: initialMin, max: initialMax } = getMinMaxProducts(INITIAL_PRODUCTS, name);

  const initialMinValueStr = String(initialMin);
  const initialMaxValueStr = String(initialMax);

  const [paramMin, paramMax] = getSearchParamValue(name).split('-');

  const infoFirst = document.createElement('span');
  infoFirst.className = 'slider-info-text first';
  infoFirst.textContent = name === 'price' ? getCurrencyString(initialMin) : initialMinValueStr;

  const infoSecond = document.createElement('span');
  infoSecond.className = 'slider-info-text second';
  infoSecond.textContent = name === 'price' ? getCurrencyString(initialMax) : initialMaxValueStr;

  infoContainer.append(infoFirst, infoSecond);

  const multiRange = document.createElement('div');
  multiRange.className = 'multi-range';

  const createRange = (rangeName: string, value: string, defaultValue: string): HTMLInputElement => {
    const range = document.createElement('input');
    range.type = 'range';
    range.min = initialMinValueStr;
    range.max = initialMaxValueStr;
    range.value = value;
    range.defaultValue = defaultValue;
    range.className = `slider-range ${rangeName}`;
    range.name = rangeName;
    return range;
  };

  const range1 = createRange('first', paramMin || initialMinValueStr, initialMinValueStr);
  const range2 = createRange('second', paramMax || initialMaxValueStr, initialMaxValueStr);

  multiRange.append(range1, range2);

  fieldset.append(legend, infoContainer, multiRange);

  const handleChange = (): void => {
    const { min, max } = getMinMaxRangeValues(fieldset);
    const value = min === initialMin && max === initialMax ? '' : `${min}-${max}`;
    updateSearchParams(name, value);
  };

  fieldset.addEventListener('change', handleChange);

  return fieldset;
}

export { createSlider };
