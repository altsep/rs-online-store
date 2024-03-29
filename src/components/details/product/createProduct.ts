import { INITIAL_PRODUCTS } from '../../../constants';
import { createAddToCart } from '../buyNow/createAddToCart';
import { createDescription } from './createDescription';
import { createPhoto } from './photo/createPhoto';

export function createProduct(id: number): HTMLDivElement {
  const productNode = document.createElement('div');

  const prodTitle = document.createElement('h2');
  prodTitle.className = 'product__title';

  productNode.append(prodTitle);

  const product = INITIAL_PRODUCTS.find((pr) => pr.id === id);

  if (!product) {
    prodTitle.textContent = 'Product not found';
    return productNode;
  }

  prodTitle.textContent = product.title;

  const productContainer = document.createElement('div');
  productContainer.className = 'product__container';

  const photoContainer = createPhoto(product);
  const description = createDescription(product);
  const buyContainer = createAddToCart(product);

  productContainer.append(photoContainer, description, buyContainer);
  productNode.append(productContainer);

  return productNode;
}
