import { store, INITIAL_ON_CART_PAGE_LIMIT } from '../../constants';
import { getSearchParamValue } from '../../utility';
import { getStartingIndices } from './getStartingIndices';
import { renderItems } from './items';
import { onPageNumClick } from './onPageNumClick';

function renderPageNumbers(parent: HTMLDivElement, itemsContainer: HTMLDivElement): void {
  const { cart } = store;
  const limit = Number(getSearchParamValue('limit')) || INITIAL_ON_CART_PAGE_LIMIT;
  const pageNum = Number(getSearchParamValue('page'));
  const pageNumIndex = pageNum ? pageNum - 1 : 0;

  const container = document.createElement('div');
  container.className = 'cart__page-numbers';

  const items = Object.values(cart);

  const startingIndices = getStartingIndices(items.length, limit);

  startingIndices.forEach((startingIndex, i) => {
    const item = document.createElement('div');
    item.className = 'cart__page-numbers-item';
    item.textContent = String(i + 1);
    item.dataset.v = String(startingIndex);

    if (pageNum ? i === pageNumIndex : i === 0) {
      item.classList.add('active');
    }

    if (startingIndices.length > 1) {
      container.append(item);
    }
  });

  const startingIndex = startingIndices[pageNumIndex];

  const startingCardsArr = items
    .map(({ id, title, amount }) => ({ id, title, amount }))
    .slice(startingIndex, startingIndex + limit);

  renderItems(itemsContainer, startingCardsArr);

  container.addEventListener('click', (e) => onPageNumClick(e, itemsContainer));

  parent.append(container);
}

export { renderPageNumbers };
