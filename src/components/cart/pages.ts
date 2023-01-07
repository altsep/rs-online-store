import { store, INITIAL_ON_CART_PAGE_LIMIT } from '../../constants';
import { getSearchParamValue } from '../../utility';
import { getStartingIndices } from './getStartingIndices';
import { renderItems } from './items';
import { onPageNumClick } from './onPageNumClick';

function renderPageNumbers(parent: HTMLDivElement, contentNode: HTMLDivElement): void {
  const { cart } = store;
  const limit = Number(getSearchParamValue('limit')) || INITIAL_ON_CART_PAGE_LIMIT;
  const pageNum = Number(getSearchParamValue('page'));
  const pageNumIndex = pageNum ? pageNum - 1 : 0;

  const numbersNode = document.createElement('div');
  numbersNode.className = 'cart__page-numbers';

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
      numbersNode.append(item);
    }
  });

  const startingIndex = startingIndices[pageNumIndex];

  const startingCardsArr = items.slice(startingIndex, startingIndex + limit);

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'cart__items';

  contentNode.append(itemsContainer);

  renderItems(itemsContainer, startingCardsArr);

  numbersNode.addEventListener('click', (e) => onPageNumClick(e, itemsContainer));

  parent.append(numbersNode);
}

export { renderPageNumbers };
