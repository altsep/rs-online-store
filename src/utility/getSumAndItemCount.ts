import { store } from '../constants';

export const getSumAndItemCount = (): { totalSum: number; itemsInCart: number } => {
  const totalSum = store.cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);
  const itemsInCart = store.cart.reduce((acc, cur) => acc + cur.amount, 0);
  return { totalSum, itemsInCart };
};
