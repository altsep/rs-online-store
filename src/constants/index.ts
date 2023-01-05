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

type ProductExtension<T> = Product & T;

interface CartProductProperties {
  amount: number;
}

type CartItem = ProductExtension<CartProductProperties>;

type ProductListItem = ProductExtension<{ amount?: number }>;

type Cart = Record<string, CartItem>;

interface Store {
  products: Product[];
  cart: Cart;
  itemsInCart: number;
  totalSum: number;
}

type Styles = Record<string, Record<string, string>>;

export type { Product, Store, ProductExtension, CartItem, ProductListItem };

const cartStr = localStorage.getItem('aahh-rs-os-cart');
const cart = JSON.parse(cartStr || '{}') as Cart;
// The following get converted to 0 when null
const totalSum = Number(localStorage.getItem('aahh-rs-os-sum'));
const itemsInCart = Number(localStorage.getItem('aahh-rs-os-num'));

// Mutable properties go in state, it being the collection of initial values
const store: Store = {
  products: tempProductsData.slice(), // When creating a new object from default properties, arrays are passed by link and have to be copied separately. This can cause unexpected results when modifying a "copy" while trying to use the initial array which ends up being modified in place of the array it replaced
  cart,
  itemsInCart,
  totalSum,
};

// Add inline styles as properties of this object
const styles: Styles = {
  json: {
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
};

const ROOT_PATH = '/products';

const INITIAL_PRODUCTS = Object.freeze(tempProductsData.slice());

const INITIAL_ON_CART_PAGE_LIMIT = 4;

export { ROOT_PATH, INITIAL_PRODUCTS, INITIAL_ON_CART_PAGE_LIMIT, store, styles };
