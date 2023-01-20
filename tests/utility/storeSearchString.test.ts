import { storeSearchString } from '../../src/utility';

const searchItemNamePrefix = 'aahh-rs-os-search-';

describe('storeSearchString', () => {
  it('writes search string to the specified storage key', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

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
      const fullName = `${searchItemNamePrefix}${name}`;
      expect(setItemSpy).toHaveBeenCalledWith(fullName, search);
    });
  });
});
