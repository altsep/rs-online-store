import { store, styles, Product } from '../../constants';
import { breadCrumbs } from './breadCrumbs';
import { getProductId } from './getProductId';
import { createProduct } from './product';

function renderDetails(): void {
  const detailsNode = document.createElement('div');
  detailsNode.className = 'details';

  const id = getProductId();

  const navigateNode = breadCrumbs(id);
  // navigateNode.className = 'prod__navigate';

  const productNode = createProduct(id);
  productNode.className = 'prod__product';

  // Object.assign(textNode.style, styles.json);
  // if (matchArr) {
  //   const id = Number(matchArr[0]);
  //   const item = store.products.find((pr: Product) => pr.id === id);
  //   headingNode.textContent = item ? `Details for item ${id}` : 'No product found under such id';
  //   textNode.textContent = `${item ? JSON.stringify(item, null, 4) : ''}`;
  //   breadCrumbs(id);
  //   createProduct(id);
  // }

  // interface Product {
  //   id: number;
  //   title: string;
  //   description: string;
  //   price: number;
  //   discountPercentage: number;
  //   rating: number;
  //   stock: number;
  //   brand: string;
  //   category: string;
  //   thumbnail: string;
  //   images: string[];
  // }

  detailsNode.append(navigateNode, productNode);

  const parentNode = document.querySelector<HTMLDivElement>('.main');

  if (parentNode) {
    parentNode.append(detailsNode);
  }
}

export { renderDetails };
