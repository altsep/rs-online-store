import { store } from '../../constants';
import { handleHistory } from '../../utility';

export function breadCrumbs(id: number): HTMLDivElement {
  const nav = document.createElement('div');
  nav.className = 'prod__navigate';

  if (!id) {
    nav.innerHTML = `Product not found`;
    return nav;
  }

  const { category, brand, title } = store.products[id - 1];

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

  storeLink.addEventListener('click', () => handleHistory('/'));
  categoryLink.addEventListener('click', () => handleHistory(`/products?category=${category.toLowerCase()}`));
  brandLink.addEventListener('click', () => handleHistory(`/products?brand=${brand.toLowerCase()}`));

  list.append(storeLink, separator, categoryLink, separator, brandLink, separator, titleLink);
  nav.append(list);

  return nav;
}
