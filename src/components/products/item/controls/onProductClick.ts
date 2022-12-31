import { handleHistory } from '../../../../utility';

export const onProductClick = (e: MouseEvent): void => {
  if (e.target instanceof HTMLElement && e.target.classList.contains('products__item')) {
    const { id } = e.target.dataset;
    let path = '';
    if (id) {
      path = `/products/${id}`;
    } else {
      path = '/products/id-unknown';
    }
    handleHistory(path);
  }
};
