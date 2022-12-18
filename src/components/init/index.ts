import { renderHeader } from '..';
import type { Props } from '../../constants';
import { handleHistory } from '../../utility';
import onNavigate from './onNavigate';

// Create main layout and append it to root
function init(props: Props /* pass props down to components */): void {
  const root = document.querySelector<HTMLDivElement>('#root');

  const headerNode = document.createElement<'header'>('header');
  headerNode.className = 'header';

  const mainNode = document.createElement<'main'>('main');
  mainNode.className = 'main';

  const footerNode = document.createElement<'footer'>('footer');
  footerNode.className = 'footer';

  if (root) {
    root.innerHTML = '';
    root.append(headerNode, mainNode, footerNode);
  }

  renderHeader('header');

  // Push default path to history if accessing root
  if (window.location.pathname === '/') {
    handleHistory(props.path, true);
  }

  // Render page matching the current path
  onNavigate(props);

  window.addEventListener('popstate', () => onNavigate(props));
}

export default init;
