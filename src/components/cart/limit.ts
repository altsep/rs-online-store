import { INITIAL_ON_CART_PAGE_LIMIT } from '../../constants';
import { getSearchParamValue, storeSearchString, updateSearchParams } from '../../utility';
import { updatePageParam } from './updatePageParam';

function createLimitItemAmountInput(renderParent: () => void): HTMLDivElement {
  const limitStr = getSearchParamValue('limit') || String(INITIAL_ON_CART_PAGE_LIMIT);

  const container = document.createElement('div');
  container.className = 'cart__page-input-container';

  const label = document.createElement('label');
  label.className = 'cart__page-input-label';
  label.htmlFor = 'items-on-cart-page';
  label.textContent = 'Limit: ';

  const input = document.createElement('input');
  input.className = 'cart__page-input input-text';
  input.type = 'number';
  input.value = limitStr;
  input.min = '1';
  input.max = '100';
  input.id = 'items-on-cart-page';

  const handleChange = (e: Event): void => {
    const { value } = e.target as HTMLInputElement;

    updateSearchParams('limit', value);

    updatePageParam();

    storeSearchString('cart');

    renderParent();
  };

  input.addEventListener('change', handleChange);

  container.append(label, input);

  return container;
}

export { createLimitItemAmountInput };
