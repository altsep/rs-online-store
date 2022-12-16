import { renderHeader } from './components';
import { State, defaults } from './constants';
import onNavigate from './functions/onNavigate';

// Create main layout and append it to root
function init(state: State /* pass the state down to components */): void {
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

  onNavigate(defaults);

  renderHeader('header');
}

export default init;
