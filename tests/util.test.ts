import { getCurrencyString } from '../src/utility';
import { getColKeyValueLen } from '../src/components/products/filters/checkboxes/getColKeyValueLen';
import { testProductsData } from './data/testProductsData';
import { Product } from '../src/constants';

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

  it('throws an error if does not match the value format', () => {
    const incorrectValue = '12zxc3';
    const attempt = (): string => getCurrencyString(incorrectValue);
    expect(attempt).toThrow('Invalid value format');
  });
});

describe('getProductsLen', () => {
  it('returns length in numbers for a specified key-value pair', () => {
    interface TestCase {
      arr: Product[];
      key: string;
      value: string;
      expected: number;
    }

    const testCases: TestCase[] = [
      { arr: testProductsData.slice(), key: 'category', value: 'smartphones', expected: 5 },
      { arr: testProductsData.slice(), key: 'brand', value: 'Samsung', expected: 2 },
      { arr: testProductsData.slice(), key: 'test', value: 'test', expected: 0 },
      { arr: testProductsData.slice(), key: 'id', value: '123', expected: 0 },
      { arr: testProductsData.slice(), key: 'images', value: '123', expected: 0 },
      { arr: [], key: '', value: '', expected: 0 },
    ];

    testCases.forEach(({ arr, key, value, expected }) => {
      const result = getColKeyValueLen(arr, key, value);
      expect(result).toEqual(expected);
    });
  });
});
