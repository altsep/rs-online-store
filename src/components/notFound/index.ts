import { Props } from '../../constants';

function renderNotFound({ parentNodeName }: Props): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'not-found';
  notFoundNode.textContent = 'Not found';

  const headingNode = document.createElement<'h2'>('h2');
  headingNode.className = 'not-found-heading heading';
  headingNode.textContent = 'Not Found';

  notFoundNode.append(headingNode);

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export default renderNotFound;
