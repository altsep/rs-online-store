export const getCurrencyString = (v: string | number): string =>
  v.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
