import plus from '../../assets/icons/plus.svg';
import type { Product, State } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';

export default function addToCartBtn(state: State, item: Product): HTMLImageElement {
  const { id, price } = item;
  const s = state; // Bypassing no-param-reassign rule

  const icon = document.createElement<'img'>('img');
  icon.className = 'products__item-icon icon';
  icon.title = 'Add to cart';
  icon.src = plus as string;

  const handleClick = (): void => {
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(s.cart, id)) {
      const { amount, stock } = s.cart[id];
      if (amount < stock) {
        s.cart[id].amount += 1;
      }
      s.itemsInCart += 1;
      s.totalSum += price;
    } else {
      s.cart[id] = { ...item, amount: 1 };
      s.itemsInCart += 1;
      s.totalSum += price;
    }
    updateCartCount(s);
  };

  icon.addEventListener('mousedown', handleClick);

  return icon;
}
