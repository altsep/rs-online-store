import { renderProducts, renderCart, renderDetails, renderNotFound, renderCheckout } from '../components';
import type { Props } from '../constants';

interface Routes {
  [key: string]: (props: Props) => void;
}

export default function onNavigate(props: Props) {
  const { pathname } = window.location;

  const productMatchArr = pathname.match(/\/products\/\d+$/);

  const routes: Routes = {
    '/': renderProducts,
    '/products': renderProducts,
    '/cart': renderCart,
    '/checkout': renderCheckout,
    // '/products/:id': renderDetails, // Looking for elegant solution to match variable route
  };

  if (pathname in routes) {
    const fn = routes[pathname];
    fn(props);
  } else if (productMatchArr) {
    renderDetails(props);
  } else {
    renderNotFound(props);
  }
}
