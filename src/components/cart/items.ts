import { styles, Product } from '../../constants';

function renderItems(parent: HTMLDivElement, data?: Pick<Product, 'id' | 'title'>[]): void {
  Object.assign(parent.style, styles.json);

  if (data && data.length) {
    parent.textContent = JSON.stringify(data, null, 4);
  } else {
    parent.textContent = 'Cart is empty';
  }
}

export { renderItems };
