import { getCurrencyString } from '../src/utility';

describe('getCurrencyString', () => {
  let amount: string | number;

  beforeEach(() => {
    amount = 40;
  });

  it('returns formatted string', () => {
    const result = getCurrencyString(amount);
    expect(result).toStrictEqual('$40.00');
  });

  it('accepts currency code', () => {
    const curCode = 'JPY';
    const result = getCurrencyString(amount, curCode);
    expect(result).toStrictEqual('¥40');
  });

  it('works with strings', () => {
    amount = '40';
    const curCode = 'EUR';
    const result = getCurrencyString(amount, curCode);
    expect(result).toStrictEqual('€40.00');
  });

  it('throws an error if does not match the value format', () => {
    const incorrectValue = '12zxc3';
    const attempt = (): string => getCurrencyString(incorrectValue);
    expect(attempt).toThrow('Invalid value format');
  });
});
