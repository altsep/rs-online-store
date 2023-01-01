import { handleHistory } from "../../utility";

function renderNotFound(): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'not-found';

  const headingNode = document.createElement('h2');
  headingNode.className = 'not-found-heading heading';
  headingNode.textContent = 'Page you are searching is not found';

  const notFoundImage = document.createElement('img');

  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = 'home';

  button.onclick = () => {
    handleHistory('/');
  }

  notFoundNode.append(headingNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export { renderNotFound };
