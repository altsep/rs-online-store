import { clearCart } from '../checkout/clearCart';

function createEmptyCartBtn(renderParent: () => void): HTMLInputElement {
  const emptyCartBtn = document.createElement('input');
  emptyCartBtn.className = 'cart__page-empty btn';
  emptyCartBtn.type = 'button';
  emptyCartBtn.value = 'Empty cart';

  emptyCartBtn.addEventListener('click', () => {
    clearCart();
    renderParent();
  });

  return emptyCartBtn;
}

export { createEmptyCartBtn };
