import { renderHeader } from '..';
import type { Props } from '../../constants';
import { handleHistory } from '../../functions';
import onNavigate from '../../functions/onNavigate';

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
    root.textContent = 'Hello World';
    root.append(headerNode, mainNode, footerNode);
  }

  renderHeader('header');

  // Push default path to history if accessing root
  if (window.location.pathname === '/') {
    handleHistory(props.path, true);
  }

  // Render page matching the current path
  onNavigate(props);
}

export default init;
