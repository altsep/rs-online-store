import { breadCrumbs } from './breadCrumbs';
import { getProductId } from './getProductId';
import { createProduct } from './product/createProduct';

function renderDetails(): void {
  const detailsNode = document.createElement('div');
  detailsNode.className = 'details';
  detailsNode.dataset.testid = 'details';

  const id = getProductId();

  const navigateNode = breadCrumbs(id);

  const productNode = createProduct(id);
  productNode.className = 'product__info wrapper';

  detailsNode.append(navigateNode, productNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(detailsNode);
  }
}

export { renderDetails };
