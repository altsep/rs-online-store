import { store } from '../../constants';
import { updateCartCount } from '../header/updateCartCount';
import { storeCartProps } from '../products/item/controls';

function createEmptyCartBtn(renderParent: () => void): HTMLInputElement {
  const emptyCartBtn = document.createElement('input');
  emptyCartBtn.className = 'cart__page-empty btn';
  emptyCartBtn.type = 'button';
  emptyCartBtn.value = 'Empty cart';

  emptyCartBtn.addEventListener('click', () => {
    store.cart = {};
    store.itemsInCart = 0;
    store.totalSum = 0;
    updateCartCount();
    storeCartProps();
    renderParent();
  });

  return emptyCartBtn;
}

export { createEmptyCartBtn };
