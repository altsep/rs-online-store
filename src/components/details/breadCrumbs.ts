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

    const list = document.createElement('div');
    list.className = 'bread-crumbs__list';

    const storeLink = document.createElement('span');
    storeLink.textContent = 'Store';

    const categoryLink = document.createElement('span');
    categoryLink.textContent = category;

    const brandLink = document.createElement('span');
    brandLink.textContent = brand;

    const titleLink = document.createElement('span');
    titleLink.textContent = title;

    removeSearchString('products');

    storeLink.addEventListener('click', () => handleHistory('/'));
    categoryLink.addEventListener('click', () => handleHistory(`/products?category=${category.toLowerCase()}`));
    brandLink.addEventListener('click', () => handleHistory(`/products?brand=${brand.toLowerCase()}`));

    const listItemsArr = [storeLink, categoryLink, brandLink, titleLink];

    list.append(...listItemsArr);

    listItemsArr.forEach((el, i, arr) => {
      el.className = 'bread-crumbs__list-item';

      if (i !== arr.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'bread-crumbs__list-item-separator';
        separator.textContent = '>';

        el.after(separator);
      }
    });

    nav.append(list);
  }

  return nav;
}
