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
  cart: Cart;
  itemsInCart: number;
  totalSum: number;
}

type CartItem = { amount: number } & Product;

type Cart = Record<string, CartItem>;

type Styles = Record<string, Record<string, string>>;

interface Props {
  readonly state: State;
  readonly styles: Styles;
  readonly parentNodeName: string;
  readonly rootPath: string;
  readonly initialProducts: Product[];
}

export type { Product, State, Props };

const cartStr = localStorage.getItem('aahh-rs-os-cart');
const cart = JSON.parse(cartStr || '{}') as Cart;

// Mutable properties go in state, it being the collection of initial values
const state: State = {
  products: tempProductsData.slice(), // When creating a new object from default properties, arrays are passed by link and have to be copied separately. This can cause unexpected results when modifying a "copy" while trying to use the initial array which ends up being modified in place of the array it replaced
  cart,
  itemsInCart: 0,
  totalSum: 0,
};

// Add inline styles as properties of this object
const styles: Styles = {
  json: {
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
};

// Readonly props are placed at the top level
const defaults: Props = {
  state,
  styles,
  parentNodeName: 'main',
  rootPath: '/products',
  initialProducts: tempProductsData.slice(),
};

export { defaults };
