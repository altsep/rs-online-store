import { renderCheckout, renderHeader } from '..';
import { ROOT_PATH } from '../../constants';
import { handleHistory } from '../../utility';
import { onNavigate } from './onNavigate';

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

  if (window.location.pathname === '/') {
    handleHistory(ROOT_PATH, true);
  }

  onNavigate();

  window.addEventListener('popstate', onNavigate);

  console.log('store-page: 120');
  console.log('cart-page: 60');
  console.log('purchase-modal: 50');
  console.log('product-details-page: 40');
  console.log('header-module: 20');
  console.log('404-page: 10');
}

export { init };
