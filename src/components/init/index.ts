import { renderCheckout, renderHeader } from '..';
import { ROOT_PATH } from '../../constants';
import { handleHistory } from '../../utility';
import { onNavigate } from './onNavigate';
import { printSelfAssessment } from './printSelfAssessment';

class App {
  private root;

  private header;

  private main;

  private footer;

  constructor(container: HTMLElement | null) {
    this.root = container;

    const header = document.createElement('header');
    header.className = 'header';
    this.header = header;

    const main = document.createElement('main');
    main.className = 'main';
    main.dataset.testid = 'main';
    this.main = main;

    const footer = document.createElement('footer');
    footer.className = 'footer';
    this.footer = footer;
  }

  public render(): void {
    const { root, header, main, footer } = this;

    if (!root) {
      document.body.textContent = `received ${String(root)} for root element`;
      document.body.style.margin = '10px';
      return;
    }

    root.innerHTML = '';
    root.append(header, main, footer);

    renderHeader();
    renderCheckout();

    if (window.location.pathname === '/') {
      handleHistory(ROOT_PATH, true);
    }

    onNavigate();

    window.addEventListener('popstate', onNavigate);

    printSelfAssessment();
  }
}

export { App };
