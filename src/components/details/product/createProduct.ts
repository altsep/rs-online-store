import { store } from '../../../constants';
import { createAddToCart } from '../buyNow/createAddToCart';
import { createDescription } from './createDescription';
import { createPhoto } from './createPhoto';

export function createProduct(id: number): HTMLDivElement {
  const productNode = document.createElement('div');

  const prodTitle = document.createElement('h2');
  prodTitle.className = 'product__title';

  productNode.append(prodTitle);

  if (!id) {
    prodTitle.textContent = 'Product not found';
    return productNode;
  }

  const product = store.products[id - 1];
  prodTitle.textContent = product.title;

  const productContainer = document.createElement('div');
  productContainer.className = 'product__container';

  const photoContainer = createPhoto(id);
  const description = createDescription(id);
  const buyContainer = createAddToCart(id);

  productContainer.append(photoContainer, description, buyContainer);
  productNode.append(productContainer);

  return productNode;
}
