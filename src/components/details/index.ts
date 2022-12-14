import type { Props } from '../../constants';

function renderDetails({ state, parentNodeName }: Props): void {
  const detailsNode = document.createElement('div');
  detailsNode.className = 'details';

  const { pathname } = window.location;

  const matchArr = pathname.match(/\d$/);

  if (matchArr) {
    const id = Number(matchArr[0]);
    const item = state.products[id - 1];
    detailsNode.textContent = item
      ? `Details for item ${id} ${item ? JSON.stringify(item) : ''}`
      : 'No product found under such id';
  }

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(detailsNode);
  }
}

export default renderDetails;
