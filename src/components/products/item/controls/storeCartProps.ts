import { store } from '../../../../constants';

export const storeCartProps = (): void => localStorage.setItem('aahh-rs-os-cart', JSON.stringify(store.cart));
