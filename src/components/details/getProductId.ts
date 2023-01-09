import { Product, store } from '../../constants';

export function getProductId(): number {
  const { pathname } = window.location;

  const matchArr = pathname.match(/\d+$/);

  if (matchArr) {
    const id = Number(matchArr[0]);
    const item = store.products.find((pr: Product) => pr.id === id);
    if (item) return id;
  }

  return 0; // if product is not found
}
