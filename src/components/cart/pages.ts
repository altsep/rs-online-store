import { store } from '../../constants';
import { renderItems } from './items';

function renderPageNumbers(parent: HTMLDivElement, itemsContainer: HTMLDivElement): void {
  const { cart, maxOnCartPage } = store;

  const container = document.createElement('div');
  container.className = 'cart__page-numbers';

  const items = Object.values(cart);

  const startingIndices = [];

  for (let i = 0; i < items.length; i += 1) {
    if (i % maxOnCartPage === 0) {
      startingIndices.push(i);
    }
  }

  startingIndices.forEach((startingIndex, i) => {
    const item = document.createElement('div');
    item.className = 'cart__page-numbers-item';
    item.textContent = String(i + 1);
    item.dataset.v = String(startingIndex);

    if (i === 0) {
      item.classList.add('active');
    }

    container.addEventListener('click', (e) => {
      if (e.target instanceof HTMLDivElement && e.target.classList.contains('cart__page-numbers-item')) {
        itemsContainer.innerHTML = '';

        const v = Number(e.target.dataset.v);

        const selectionArr = items.slice(v, v + maxOnCartPage).map(({ id, title, amount }) => ({ id, title, amount }));

        renderItems(itemsContainer, selectionArr);

        const activePageNumberNode = document.querySelector('.cart__page-numbers-item.active');

        if (activePageNumberNode) {
          activePageNumberNode.classList.remove('active');
        }

        e.target.classList.add('active');
      }
    });

    if (startingIndices.length > 1) {
      container.append(item);
    }
  });

  parent.append(container);
}

export { renderPageNumbers };
