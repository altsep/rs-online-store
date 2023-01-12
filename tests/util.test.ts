import { getCurrencyString, storeSearchString, handleHistory } from '../src/utility';
import { getColKeyValueLen } from '../src/components/products/filters/checkboxes/getColKeyValueLen';
import { testProductsData } from './data/testProductsData';
import { Product } from '../src/constants';

describe('handleHistory', () => {
  const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');
  const pushStateSpy = jest.spyOn(window.history, 'pushState');
  const replaceStateSpy = jest.spyOn(window.history, 'replaceState');
  const url = '/products';
  const testCases = ['/', '/products', '/cart', '/details'];

  it('dispatches an event to window', () => {
    handleHistory(url);

    expect(dispatchEventSpy).toHaveBeenCalled();
    expect(dispatchEventSpy).toHaveBeenCalledWith(new Event(''));

    const { pathname } = window.location;
    expect(pathname).toEqual(url);
  });

  it('proper event type is received', () => {
    const handler = jest.fn();

    window.addEventListener('popstate', handler);

    handleHistory(url);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(new Event(''));
  });

  it('pushState is called', () => {
    testCases.forEach((caseUrl) => handleHistory(caseUrl));
    expect(pushStateSpy).toHaveBeenCalledTimes(testCases.length);
  });

  it('pushState updates the url', () => {
    testCases.forEach((caseUrl) => {
      handleHistory(caseUrl);
      const { pathname } = window.location;
      expect(pathname).toEqual(caseUrl);
    });
  });

  it('replaceState is not called when the second argument is false', () => {
    handleHistory(url, false);
    expect(replaceStateSpy).not.toHaveBeenCalled();
  });

  it('replaceState is called when the second argument has been passed and when it equals true', () => {
    handleHistory(url, true);
    expect(replaceStateSpy).toHaveBeenCalled();
  });

  it('replaceState updates the url', () => {
    const { length: initialLength } = window.history;

    testCases.forEach((caseUrl) => {
      handleHistory(caseUrl, true);
      const { pathname } = window.location;
      const { length } = window.history;
      expect(pathname).toEqual(caseUrl);
      expect(length).toEqual(initialLength);
    });
  });
});

describe('storeSearchString', () => {
  it('writes search string to the specified storage key', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const namePrefix = 'aahh-rs-os-search-';

    const testCases = [
      {
        name: 'products',
        search: '?category=smartphones%7Claptops%7Cfragrances&brand=Apple%7CSamsung%7COPPO&text=12&sort=price+asc',
      },
      {
        name: 'cart',
        search: '?limit=4&page=2',
      },
    ];

    testCases.forEach(({ name, search }) => {
      window.history.pushState({}, '', search);
      storeSearchString(name);
      const fullName = `${namePrefix}${name}`;
      expect(setItemSpy).toHaveBeenCalledWith(fullName, search);
    });
  });
});

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
