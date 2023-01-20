import { renderProducts, renderCart, renderDetails, renderNotFound, renderCheckout } from '..';

interface Route {
  path: RegExp;
  fn: () => void;
}

function onNavigate(): void {
  const { pathname } = window.location;

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.innerHTML = '';
  }

  const routes: Route[] = [
    { path: /\/$/, fn: renderProducts },
    { path: /\/products$/, fn: renderProducts },
    { path: /\/cart$/, fn: renderCart },
    { path: /\/checkout$/, fn: renderCheckout },
    { path: /\/products\/\d+$/, fn: renderDetails },
    { path: /./, fn: renderNotFound },
  ];

  const findRoute = ({ path }: Route): boolean => path.test(pathname);

  const route = routes.find(findRoute);

  if (route) {
    const { fn } = route;
    fn();
  }
}

export { onNavigate };
