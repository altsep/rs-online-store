import { State } from '../../../../constants';

export const storeCartProps = (state: State): void => {
  localStorage.setItem('aahh-rs-os-cart', JSON.stringify(state.cart));
  localStorage.setItem('aahh-rs-os-sum', JSON.stringify(state.totalSum));
  localStorage.setItem('aahh-rs-os-num', JSON.stringify(state.itemsInCart));
};
