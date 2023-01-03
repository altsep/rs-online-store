import { handleHistory } from '../../utility';
import errorImage from '../../assets/images/404.png';

function renderNotFound(): void {
  const notFoundNode = document.createElement('div');
  notFoundNode.className = 'wrapper not-found';

  const notFoundContainer = document.createElement('div');
  notFoundContainer.className = 'not-found__container';

  const errTitle = document.createElement('h2');
  errTitle.className = 'err-title';
  errTitle.textContent = 'Not found';

  const errMessage = document.createElement('div');
  errMessage.className = 'err-message';
  errMessage.textContent = 'The page you are looking for is unavailable';

  const goHomebtn = document.createElement('button');
  goHomebtn.className = 'btn go-home__btn';
  goHomebtn.textContent = 'Click here to go back to the HomePage';

  notFoundContainer.append(errTitle, errMessage, goHomebtn);

  const notFoundImage = document.createElement('img');
  notFoundImage.className = 'not-found__background';
  notFoundImage.src = errorImage;
  notFoundImage.alt = 'Not Found';

  goHomebtn.addEventListener('click', () => {
    handleHistory('/');
  });

  notFoundNode.append(notFoundImage, notFoundContainer);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(notFoundNode);
  }
}

export { renderNotFound };
