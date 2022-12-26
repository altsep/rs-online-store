import type { Product, State } from '../../../../constants';
import text from './text';
import sort from './sort';
import check from './check';

export type FilterElement = HTMLInputElement | HTMLFieldSetElement | HTMLSelectElement;

type FilterFn = (products: Product[], name: string, query: string) => Product[];

type FilterFns = Record<string, FilterFn>;

const filterFns: FilterFns = {
  text,
  sort,
  category: check,
  brand: check,
};

const filterFn = (state: State, initialProducts: Product[]): void => {
  let products = initialProducts.slice();
  const params = new URLSearchParams(window.location.search);
  const filterElements = document.querySelectorAll<FilterElement>('.filter');
  const filterNames = [...filterElements].map(({ name }) => name);

  filterNames.forEach((name) => {
    const query = params.get(name) || '';

    if (name in filterFns) {
      const fn = filterFns[name];
      products = fn(products, name, query);
    }
  });

  state.products = products;
};

export default filterFn;
