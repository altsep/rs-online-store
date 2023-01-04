import { INITIAL_ON_CART_PAGE_LIMIT, store } from '../../constants';
import { getSearchParamValue, storeSearchString, updateURL } from '../../utility';
import { getStartingIndices } from './getStartingIndices';

function createLimitItemAmountInput(renderParent: () => void): HTMLDivElement {
  const limit = getSearchParamValue('limit') || String(INITIAL_ON_CART_PAGE_LIMIT);
  const itemsLen = Object.keys(store.cart).length;

  const container = document.createElement('div');
  container.className = 'cart__page-input-container';

  const label = document.createElement('label');
  label.className = 'cart__page-input-label';
  label.htmlFor = 'items-on-cart-page';
  label.textContent = 'Limit: ';

  const input = document.createElement('input');
  input.className = 'cart__page-input input-text';
  input.type = 'number';
  input.value = limit;
  input.min = '1';
  input.max = '100';
  input.id = 'items-on-cart-page';

  const handleChange = (e: Event): void => {
    const { value } = e.target as HTMLInputElement;

    updateURL('limit', value);

    const page = getSearchParamValue('page');

    const startingIndices = getStartingIndices(itemsLen, Number(value));

    if (Number(page) > startingIndices.length) {
      const query = startingIndices.length > 1 ? String(startingIndices.length) : '';
      updateURL('page', query);
    }

    // Actions executed after navigation updates
    // Store search params
    storeSearchString('cart');

    // Recursively rerender
    renderParent();
  };

  input.addEventListener('change', handleChange);

  container.append(label, input);

  return container;
}

export { createLimitItemAmountInput };
