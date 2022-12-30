import { defaults } from '../../../constants';

export default (): void => {
  const el = document.querySelector<HTMLDivElement>('.filters__form-products-found');
  if (el) {
    el.textContent = `Found: ${defaults.state.products.length}`;
  }
};
