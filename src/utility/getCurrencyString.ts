export const getCurrencyString = (v: string | number, currency = 'USD'): string => {
  if (typeof v === 'string' && !/^\d+$/.test(v)) {
    throw Error('Invalid value format');
  }

  const locale = navigator.language || 'en-US';

  return Number(v).toLocaleString(locale, { style: 'currency', currency });
};
