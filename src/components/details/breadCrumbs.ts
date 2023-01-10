import { INITIAL_PRODUCTS } from '../../constants';
import { handleHistory, removeSearchString } from '../../utility';

export function breadCrumbs(id: number): HTMLDivElement {
  const nav = document.createElement('div');
  nav.className = 'product__navigate';

  if (!id) {
    nav.innerHTML = ``;
    return nav;
  }

  const product = INITIAL_PRODUCTS.find((pr) => pr.id === id);

  if (product) {
    const { category, brand, title } = product;

    const list = document.createElement('ul');
    list.className = 'bread-crumbs__list';

    const storeLink = document.createElement('li');
    const separator = '>';
    const categoryLink = document.createElement('li');
    const brandLink = document.createElement('li');
    const titleLink = document.createElement('li');

    storeLink.textContent = 'Store';
    categoryLink.textContent = category;
    brandLink.textContent = brand;
    titleLink.textContent = title;

    removeSearchString('products');

    storeLink.addEventListener('click', () => handleHistory('/'));
    categoryLink.addEventListener('click', () => handleHistory(`/products?category=${category.toLowerCase()}`));
    brandLink.addEventListener('click', () => handleHistory(`/products?brand=${brand.toLowerCase()}`));

    list.append(storeLink, separator, categoryLink, separator, brandLink, separator, titleLink);
    nav.append(list);
  }

  return nav;
}
