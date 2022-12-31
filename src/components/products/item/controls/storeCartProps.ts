import { store } from '../../../../constants';

export const storeCartProps = (): void => {
  localStorage.setItem('aahh-rs-os-cart', JSON.stringify(store.cart));
  localStorage.setItem('aahh-rs-os-sum', JSON.stringify(store.totalSum));
  localStorage.setItem('aahh-rs-os-num', JSON.stringify(store.itemsInCart));
};
