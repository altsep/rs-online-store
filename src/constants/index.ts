import { tempProductsData } from '../data';

interface Product {
  // Describe product item here
  [key: string]: string | number | string[];
}

interface State {
  products: Product[];
}

interface Props {
  state: State;
  isDefault?: boolean;
  parentNodeName: string;
  page?: string;
}

export type { State, Props };

const defaults: Props = {
  state: {
    products: tempProductsData, // When creating a new object from default properties, arrays are passed by link and have to be copied separately. This can cause unexpected results when modifying a "copy" while trying to use the initial array which ends up being modified
  }, // Mutable properties go in state, it being the collection of initial values
  isDefault: false,
  parentNodeName: 'main',
  page: 'products',
};

export { defaults };
