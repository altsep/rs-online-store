import { retrieveSearchParams } from '../../src/utility';

const searchItemNamePrefix = 'aahh-rs-os-search-';

describe('retrieveSearchParams', () => {
  const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  const replaceStateSpy = jest.spyOn(window.history, 'replaceState');
  const testCases = ['products', 'cart', 'details'];

  it('does not make a call if pathname does not match the name', () => {
    testCases.forEach((name) => {
      retrieveSearchParams(name);
      expect(replaceStateSpy).not.toHaveBeenCalled();
    });
  });

  it('calls getItem with proper name', () => {
    testCases.forEach((name) => {
      retrieveSearchParams(name);
      const fullName = `${searchItemNamePrefix}${name}`;
      expect(getItemSpy).toHaveBeenCalledWith(fullName);
    });
  });

  it('makes a call to replaceState if pathname matches name with the retrieved value', () => {
    testCases.forEach((name) => {
      window.history.replaceState({}, '', `/${name}`);
      retrieveSearchParams(name);
      expect(replaceStateSpy).toHaveBeenCalledWith({}, '', null);
    });
  });
});
