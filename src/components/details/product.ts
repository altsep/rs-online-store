import { store } from '../../constants';

export function createProduct(id: number): HTMLDivElement {
  const product = store.products[id - 1];

  const productNode = document.createElement('div');

  console.log(product);
  return productNode;
}
