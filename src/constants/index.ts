import { tempProductsData } from '../data';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface State {
  products: Product[];
}

interface Props {
  state: State;
  parentNodeName: string;
  path: string;
}

export type { State, Props };

const defaults: Props = {
  state: {
    products: tempProductsData, // When creating a new object from default properties, arrays are passed by link and have to be copied separately. This can cause unexpected results when modifying a "copy" while trying to use the initial array which ends up being modified
  }, // Mutable properties go in state, it being the collection of initial values
  parentNodeName: 'main',
  path: '/products',
};

export { defaults };
