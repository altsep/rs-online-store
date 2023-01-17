import { getCurrencyString } from '../../src/utility';

describe('getCurrencyString', () => {
  let amount: string | number;

  beforeEach(() => {
    amount = 40;
  });

  it('returns formatted string', () => {
    const result = getCurrencyString(amount);
    const expected = '$40.00';
    expect(result).toStrictEqual(expected);
  });

  it('accepts currency code', () => {
    const curCode = 'JPY';
    const result = getCurrencyString(amount, curCode);
    const expected = '¥40';
    expect(result).toStrictEqual(expected);
  });

  it('works with strings', () => {
    amount = '40';
    const curCode = 'EUR';
    const result = getCurrencyString(amount, curCode);
    const expected = '€40.00';
    expect(result).toStrictEqual(expected);
  });

  it('throws an error if the first argument does not match the value format', () => {
    const incorrectValue = '12zxc3';
    const attempt = (): string => getCurrencyString(incorrectValue);
    expect(attempt).toThrow('Invalid value format');
  });
});
