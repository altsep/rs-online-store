import { INITIAL_ON_CART_PAGE_LIMIT, store } from '../../constants';
import { getSearchParamValue, updateSearchParams } from '../../utility';
import { getStartingIndices } from './getStartingIndices';

function updatePageParam(): void {
  const limitNum = Number(getSearchParamValue('limit')) || INITIAL_ON_CART_PAGE_LIMIT;
  const pageNum = Number(getSearchParamValue('page'));

  const itemsLen = Object.keys(store.cart).length;

  const startingIndices = getStartingIndices(itemsLen, limitNum);

  if (pageNum > startingIndices.length) {
    const query = startingIndices.length > 1 ? String(startingIndices.length) : '';
    updateSearchParams('page', query);
  }
}

export { updatePageParam };
