import { productsData } from '../data';

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

type Cart = CartItem[];

interface Store {
  products: Product[];
  cart: Cart;
}

type Styles = Record<string, Record<string, string>>;

interface Promo {
  name: Uppercase<string>;
  description: string;
  discountPercentage: number;
  active: boolean;
}

type KeyOfType<T, TProp> = { [P in keyof T]: T[P] extends TProp ? P : never }[keyof T];

export type { Product, Store, ProductExtension, CartItem, ProductListItem, Promo, KeyOfType };

const cartStr = localStorage.getItem('aahh-rs-os-cart');
const cart = JSON.parse(cartStr || '[]') as Cart;

const MAX_CARDS = 40;

const store: Store = {
  products: productsData.slice(0, MAX_CARDS),
  cart,
};

const styles: Styles = {
  json: {
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
};

const defaultPromoCodes: Promo[] = [
  {
    name: 'SALE',
    description: 'Best sale ever',
    discountPercentage: 10,
    active: false,
  },
  {
    name: 'ELAS',
    description: 'Reve elas tseb',
    discountPercentage: 20,
    active: false,
  },
];

const promoCodesStorageItem = localStorage.getItem('aahh-rs-os-promo');

const promoCodes = promoCodesStorageItem ? (JSON.parse(promoCodesStorageItem) as Promo[]) : defaultPromoCodes;

const ROOT_PATH = '/products';

const INITIAL_PRODUCTS = Object.freeze(productsData.slice(0, MAX_CARDS));

const INITIAL_ON_CART_PAGE_LIMIT = 4;

export { ROOT_PATH, INITIAL_PRODUCTS, MAX_CARDS, INITIAL_ON_CART_PAGE_LIMIT, store, styles, promoCodes };
