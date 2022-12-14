import type { State } from '../root';

// Create and append main layout
function init(state: State /* pass the state down to components */): void {
  const root = document.querySelector<HTMLDivElement>('#root');

  const header = document.createElement('header');
  header.className = 'header';

  const main = document.createElement('main');
  main.className = 'main';

  const footer = document.createElement('footer');
  footer.className = 'footer';

  if (root) {
    root.textContent = 'Hello World';
    root.append(header, main, footer);
  }
}

export default init;
