import { handleHistory } from "../../utility";
import errorImage from '../../assets/images/404.png';

function renderNotFound(): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'not-found';

  const notFoundContainer = document.createElement('div');
  notFoundContainer.className = 'not-found__container';

  const errNumber = document.createElement('div');
  errNumber.className = 'err-number';
  errNumber.textContent = '404';

  const errText = document.createElement('h2');
  errText.className = 'err-text';
  errText.textContent = 'The page cannot be found';

  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = '--> To main page';

  notFoundContainer.append(errNumber, errText, button);

  const notFoundImage = document.createElement('img');
  notFoundImage.className = 'not-found__background';
  notFoundImage.src = errorImage;
  notFoundImage.alt = 'Not Found';

  button.onclick = () => {
    handleHistory('/');
  }

  notFoundNode.append(notFoundImage, notFoundContainer);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export { renderNotFound };
