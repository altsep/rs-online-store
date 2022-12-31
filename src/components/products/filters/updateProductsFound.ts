import { store } from '../../../constants';

export const updateProductsFound = (): void => {
  const el = document.querySelector<HTMLDivElement>('.filters__form-products-found');
  if (el) {
    el.textContent = `Found: ${store.products.length}`;
  }
};
