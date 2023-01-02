import { store } from '../../constants';

function createLimitItemAmountInput(renderParent: () => void): HTMLDivElement {
  const { maxOnCartPage } = store;

  const container = document.createElement('div');
  container.className = 'cart__page-input-container';

  const label = document.createElement('label');
  label.className = 'cart__page-input-label';
  label.htmlFor = 'items-on-cart-page';
  label.textContent = 'Limit: ';

  const input = document.createElement('input');
  input.className = 'cart__page-input input-text';
  input.type = 'number';
  input.value = String(maxOnCartPage);
  input.min = '1';
  input.max = '100';
  input.id = 'items-on-cart-page';

  const handleChange = (e: Event): void => {
    const { value } = e.target as HTMLInputElement;

    store.maxOnCartPage = Number(value);

    renderParent();

    localStorage.setItem('aahh-rs-os-max', JSON.stringify(store.maxOnCartPage));
  };

  input.addEventListener('change', handleChange);

  container.append(label, input);

  return container;
}

export { createLimitItemAmountInput };
