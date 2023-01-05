import { breadCrumbs } from './breadCrumbs';
import { getProductId } from './getProductId';
import { createProduct } from './product/createProduct';

function renderDetails(): void {
  const detailsNode = document.createElement('div');
  detailsNode.className = 'details';

  const id = getProductId();

  const navigateNode = breadCrumbs(id);

  const productNode = createProduct(id);
  productNode.className = 'product__info';

  // Object.assign(textNode.style, styles.json);
  // if (matchArr) {
  //   const id = Number(matchArr[0]);
  //   const item = store.products.find((pr: Product) => pr.id === id);
  //   headingNode.textContent = item ? `Details for item ${id}` : 'No product found under such id';
  //   textNode.textContent = `${item ? JSON.stringify(item, null, 4) : ''}`;
  //   breadCrumbs(id);
  //   createProduct(id);
  // }


  detailsNode.append(navigateNode, productNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(detailsNode);
  }
}

export { renderDetails };
