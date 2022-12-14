import { Props } from '../../constants';

function renderNotFound({ parentNodeName }: Props): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'not-found';
  notFoundNode.textContent = 'Not found';

  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export default renderNotFound;
