import type { State } from '../../../../constants';
import { updateURL } from '../../../../utility';
import renderProductList from '../../renderProductList';

function createSortDataList(state: State, name: string): HTMLSelectElement {
  const selectId = 'sort';

  const select = document.createElement('select');
  select.className = selectId;
  select.id = selectId;

  const optionPlaceholder = document.createElement('option');
  optionPlaceholder.value = '';
  optionPlaceholder.textContent = 'Sort';
  optionPlaceholder.setAttribute('disabled', '');

  const optionPriceDesc = document.createElement('option');
  optionPriceDesc.value = 'price desc';
  optionPriceDesc.textContent = 'price desc';

  const optionPriceAsc = document.createElement('option');
  optionPriceAsc.value = 'price asc';
  optionPriceAsc.textContent = 'price asc';

  const optionRatingDesc = document.createElement('option');
  optionRatingDesc.value = 'rating desc';
  optionRatingDesc.textContent = 'rating desc';

  const optionRatingAsc = document.createElement('option');
  optionRatingAsc.value = 'rating asc';
  optionRatingAsc.textContent = 'rating asc';

  const optionDiscountDesc = document.createElement('option');
  optionDiscountDesc.value = 'discount desc';
  optionDiscountDesc.textContent = 'discount desc';

  const optionDiscountAsc = document.createElement('option');
  optionDiscountAsc.value = 'discount asc';
  optionDiscountAsc.textContent = 'discount asc';

  select.append(
    optionPlaceholder,
    optionPriceDesc,
    optionPriceAsc,
    optionRatingDesc,
    optionRatingAsc,
    optionDiscountDesc,
    optionDiscountAsc
  );

  return select;
}

export default createSortDataList;
