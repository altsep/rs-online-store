export const getCurrencyString = (v: string | number, currency = 'USD'): string => {
  const locale = navigator.language || 'en-US';
  return v.toLocaleString(locale, { style: 'currency', currency });
};
