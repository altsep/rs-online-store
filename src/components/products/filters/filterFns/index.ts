import { Product, INITIAL_PRODUCTS, store } from '../../../../constants';
import { text } from './text';
import { sort } from './sort';
import { check } from './check';
import { range } from './range';

export type FilterElement = HTMLInputElement | HTMLFieldSetElement | HTMLSelectElement;

type FilterFn = (products: Product[], name: string, query: string) => Product[];

type FilterFns = Record<string, FilterFn>;

const filterFns: FilterFns = {
  text,
  sort,
  check,
  range,
};

export const filterFn = (): void => {
  let products = INITIAL_PRODUCTS.slice();
  const params = new URLSearchParams(window.location.search);
  const filterElements = document.querySelectorAll<FilterElement>('.filter');
  const filterNames = [...filterElements].map(({ name, dataset: { filterType } }) => ({
    name,
    filterType,
  }));

  filterNames.forEach(({ name, filterType }) => {
    if (filterType && filterType in filterFns) {
      const query = params.get(name) || '';

      const fn = filterFns[filterType];
      products = fn(products, name, query);
    }
  });

  store.products = products;
};
