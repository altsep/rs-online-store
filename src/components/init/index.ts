import { renderCheckout, renderHeader } from '..';
import { ROOT_PATH } from '../../constants';
import { handleHistory } from '../../utility';
import { onNavigate } from './onNavigate';

// Create main layout and append it to root
function init(): void {
  const root = document.querySelector<HTMLDivElement>('#root');

  const header = document.createElement('header');
  header.className = 'header';

  const main = document.createElement('main');
  main.className = 'main';

  const footer = document.createElement('footer');
  footer.className = 'footer';

  if (root) {
    root.innerHTML = '';
    root.append(header, main, footer);
  }

  renderHeader();
  renderCheckout();

  // Push default path to history if accessing root
  if (window.location.pathname === '/') {
    handleHistory(ROOT_PATH, true);
  }

  // Render page matching the current path
  onNavigate();

  window.addEventListener('popstate', onNavigate);
}

export { init };
