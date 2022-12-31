import { defaults } from '../../../constants';

export const updateProductsFound = (): void => {
  const el = document.querySelector<HTMLDivElement>('.filters__form-products-found');
  if (el) {
    el.textContent = `Found: ${defaults.state.products.length}`;
  }
};
