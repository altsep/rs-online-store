import { renderProducts, renderCart, renderDetails, renderNotFound, renderCheckout } from '../components';
import type { Props } from '../constants';

interface Route {
  path: string;
  fn: (props: Props, param?: string) => void;
}

export default function onNavigate(props: Props) {
  const { pathname } = window.location;

  const routes: Route[] = [
    { path: '/', fn: renderProducts },
    { path: '/products', fn: renderProducts },
    { path: '/cart', fn: renderCart },
    { path: '/checkout', fn: renderCheckout },
    { path: '/products/:id', fn: renderDetails }, // Looking for elegant solution to match variable route;
  ];

  const beforeLastPathRegExp = /\/(?=\w+$)/;
  const [locationPrefix, locationParam] = pathname.split(beforeLastPathRegExp);

  // Provide support for params in route paths
  const findRoute = ({ path }: Route): boolean => {
    if (path.includes('/:id')) {
      const beforeParamRegExp = /\/(?=:id$)/;
      const [routePrefix] = path.split(beforeParamRegExp);
      return routePrefix === locationPrefix;
    }

    return pathname === path;
  };

  const route = routes.find(findRoute);

  if (route) {
    const { fn } = route;
    fn(props, locationParam);
  } else {
    renderNotFound(props);
  }
}
