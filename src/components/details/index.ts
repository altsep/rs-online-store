import type { Product, Props } from '../../constants';

function renderDetails({ state, styles, parentNodeName }: Props): void {
  const detailsNode = document.createElement('div');
  detailsNode.className = 'details';

  const { pathname } = window.location;

  const matchArr = pathname.match(/\d+$/);

  const headingNode = document.createElement('h2');
  headingNode.className = 'details-heading heading';

  const textNode = document.createElement('p');
  textNode.className = 'details-text';
  Object.assign(textNode.style, styles.json);

  if (matchArr) {
    const id = Number(matchArr[0]);
    const item = state.products.find((pr: Product) => pr.id === id);
    headingNode.textContent = item ? `Details for item ${id}` : 'No product found under such id';
    textNode.textContent = `${item ? JSON.stringify(item, null, 4) : ''}`;
  }

  detailsNode.append(headingNode, textNode);

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(detailsNode);
  }
}

export default renderDetails;
