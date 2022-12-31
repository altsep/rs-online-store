function renderNotFound(): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'not-found';

  const headingNode = document.createElement('h2');
  headingNode.className = 'not-found-heading heading';
  headingNode.textContent = 'Not Found';

  notFoundNode.append(headingNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export { renderNotFound };
