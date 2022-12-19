import { tempProductsData } from '../data';

export interface Product {
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
  cart: Product[];
  itemsInCart: number;
  totalSum: number;
}

interface Props {
  state: State;
  readonly parentNodeName: string;
  readonly rootPath: string;
}

export type { State, Props };

const cartItem = localStorage.getItem('aaaf-rs-os-cart');
const cart = JSON.parse(cartItem || '[]') as Product[];

const defaults: Props = {
  state: {
    products: tempProductsData || [], // When creating a new object from default properties, arrays are passed by link and have to be copied separately. This can cause unexpected results when modifying a "copy" while trying to use the initial array which ends up being modified
    cart,
    itemsInCart: 0,
    totalSum: 0,
  }, // Mutable properties go in state, it being the collection of initial values
  parentNodeName: 'main',
  rootPath: '/products', // Readonly props are placed here
};

export { defaults };
