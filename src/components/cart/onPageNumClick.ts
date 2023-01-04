import { store, INITIAL_ON_CART_PAGE_LIMIT } from '../../constants';
import { getSearchParamValue, storeSearchString, updateURL } from '../../utility';
import { renderItems } from './items';

export const onPageNumClick = (e: MouseEvent, itemsContainer: HTMLDivElement): void => {
  if (e.target instanceof HTMLDivElement && e.target.classList.contains('cart__page-numbers-item')) {
    const items = Object.values(store.cart);
    const limit = Number(getSearchParamValue('limit')) || INITIAL_ON_CART_PAGE_LIMIT;

    itemsContainer.innerHTML = '';

    const {
      textContent,
      dataset: { v },
    } = e.target;

    const pageStartingIndex = Number(v);

    const selectionArr = items
      .slice(pageStartingIndex, pageStartingIndex + limit)
      .map(({ id, title, amount }) => ({ id, title, amount }));

    renderItems(itemsContainer, selectionArr);

    const activePageNumberNode = document.querySelector('.cart__page-numbers-item.active');

    if (activePageNumberNode) {
      activePageNumberNode.classList.remove('active');
    }

    e.target.classList.add('active');

    const query = textContent && textContent !== '1' ? textContent : '';

    updateURL('page', query);

    storeSearchString('cart');
  }
};
