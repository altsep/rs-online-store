import { renderProducts, renderCart, renderDetails, renderNotFound, renderCheckout } from '..';
import type { Props } from '../../constants';

interface Route {
  path: RegExp;
  fn: (props: Props) => void;
}

function onNavigate(props: Props): void {
  const { pathname } = window.location;
  const { parentNodeName } = props;

  const parentNode = document.querySelector<HTMLElement>(parentNodeName);

  if (parentNode) {
    parentNode.innerHTML = '';
  }

  const routes: Route[] = [
    { path: /\/$/, fn: renderProducts }, // Add home page?
    { path: /\/products$/, fn: renderProducts },
    { path: /\/cart$/, fn: renderCart },
    { path: /\/checkout$/, fn: renderCheckout },
    { path: /\/products\/\d+$/, fn: renderDetails }, // Looking for elegant solution to match variable route
    { path: /[^/]/, fn: renderNotFound }, // Match this route if nothing else does
  ];

  const findRoute = ({ path }: Route): boolean => path.test(pathname);

  const route = routes.find(findRoute);

  if (route) {
    const { fn } = route;
    fn(props);
  }
}

export default onNavigate;
