import { renderHeader } from '..';
import type { Props } from '../../constants';
import { handleHistory } from '../../utility';
import handleSearchParams from './handleSearchParams';
import onNavigate from './onNavigate';

// Create main layout and append it to root
function init(props: Props /* pass props down to components */): void {
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

  renderHeader(props.state);

  // Push default path to history if accessing root
  if (window.location.pathname === '/') {
    handleHistory(props.rootPath, true);
  }

  // Render page matching the current path
  onNavigate(props);

  window.addEventListener('popstate', () => onNavigate(props));

  handleSearchParams();
}

export default init;
