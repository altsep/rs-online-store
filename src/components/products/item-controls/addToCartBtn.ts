import plus from '../../../assets/icons/plus.svg';
import type { Product, State } from '../../../constants';
import updateCartCount from '../../header/updateCartCount';
import storeCartProps from './storeCartProps';

export default function addToCartBtn(state: State, item: Product): HTMLImageElement {
  const { id, price } = item;

  const icon = document.createElement('img');
  icon.className = 'products__item-add-icon icon';
  icon.title = 'Add to cart';
  icon.src = plus;

  const handleClick = (): void => {
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    if (!Object.prototype.hasOwnProperty.call(state.cart, id)) {
      state.cart[id] = { ...item, amount: 0 }; // Add cart item under the specified id if it doesn't exist. Include counter for amount as its property

      const removeIcon = icon.previousElementSibling;
      removeIcon?.classList.remove('invisible');
    }

    const { amount, stock } = state.cart[id];

    if (amount < stock) {
      state.cart[id].amount += 1;
      state.itemsInCart += 1;
      state.totalSum += price;
    }

    storeCartProps(state);

    updateCartCount(state);
  };

  icon.addEventListener('click', handleClick);

  return icon;
}
