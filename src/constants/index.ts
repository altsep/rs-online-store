import { tempProductsData } from '../data';

interface Product {
  // Add description of product item here
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
    products: tempProductsData,
  }, // Mutable properties go in state. It is the collection of initial values
  isDefault: false,
  parentNodeName: 'main',
  page: 'products',
};

export { defaults };
