import { renderHeader } from '..';
import { ROOT_PATH } from '../../constants';
import { handleHistory } from '../../utility';
import { onNavigate } from './onNavigate';

// Create main layout and append it to root
function init(): void {
  const root = document.querySelector<HTMLDivElement>('#root');

  const headerNode = document.createElement('header');
  headerNode.className = 'header';

  const mainNode = document.createElement('main');
  mainNode.className = 'main';

  const footerNode = document.createElement('footer');
  footerNode.className = 'footer';

  if (root) {
    root.innerHTML = '';
    root.append(headerNode, mainNode, footerNode);
  }

  renderHeader();

  // Push default path to history if accessing root
  if (window.location.pathname === '/') {
    handleHistory(ROOT_PATH, true);
  }

  // Render page matching the current path
  onNavigate();

  window.addEventListener('popstate', () => onNavigate());
}

export { init };
