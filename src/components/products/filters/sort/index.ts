import type { Props } from '../../../../constants';
import handleChange from './handleChange';

function createSelect(props: Props, name: string): HTMLSelectElement {
  const select = document.createElement('select');
  select.className = name;
  select.id = name;

  select.addEventListener('change', (e) => handleChange(e, props));

  const optionPlaceholder = document.createElement('option');
  optionPlaceholder.value = '';
  optionPlaceholder.textContent = '--Sort--';

  const optionPriceAsc = document.createElement('option');
  optionPriceAsc.value = 'price asc';
  optionPriceAsc.textContent = 'price asc';

  const optionPriceDesc = document.createElement('option');
  optionPriceDesc.value = 'price desc';
  optionPriceDesc.textContent = 'price desc';

  const optionRatingAsc = document.createElement('option');
  optionRatingAsc.value = 'rating asc';
  optionRatingAsc.textContent = 'rating asc';

  const optionRatingDesc = document.createElement('option');
  optionRatingDesc.value = 'rating desc';
  optionRatingDesc.textContent = 'rating desc';

  const optionDiscountAsc = document.createElement('option');
  optionDiscountAsc.value = 'discount asc';
  optionDiscountAsc.textContent = 'discount asc';

  const optionDiscountDesc = document.createElement('option');
  optionDiscountDesc.value = 'discount desc';
  optionDiscountDesc.textContent = 'discount desc';

  select.append(
    optionPlaceholder,
    optionPriceAsc,
    optionPriceDesc,
    optionRatingAsc,
    optionRatingDesc,
    optionDiscountAsc,
    optionDiscountDesc
  );

  return select;
}

export default createSelect;
