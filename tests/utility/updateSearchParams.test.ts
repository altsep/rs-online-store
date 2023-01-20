import { updateSearchParams } from '../../src/utility';

describe('updateSearchParams', () => {
  const replaceStateSpy: jest.SpyInstance = jest.spyOn(window.history, 'replaceState');

  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('to call replaceState', () => {
    updateSearchParams('', '');
    expect(replaceStateSpy).toHaveBeenCalledTimes(2);
  });

  it('to set the correct url', () => {
    const testCases = [
      { key: '', value: '' },
      { key: 'emptyParam', value: '' },
      { key: 'name', value: 'value' },
      { key: 'range', value: '1-6000' },
    ];

    testCases.forEach(({ key, value }) => {
      updateSearchParams(key, value);

      const params = new URLSearchParams(window.location.search);

      if (value) {
        expect(params.get(key)).toEqual(value);
      } else {
        expect(params.has(key)).toEqual(false);
      }
    });

    expect(replaceStateSpy).toHaveBeenCalledTimes(testCases.length + 1);
  });

  it('removes param if value is empty', () => {
    const testCases = [
      { key: 'test', value: 'value' },
      { key: 'test', value: '' },
    ];

    const [caseHasValue, caseMissingValue] = testCases;

    updateSearchParams(caseHasValue.key, caseHasValue.value);

    const mockQuery = `?${caseHasValue.key}=${caseHasValue.value}`;

    expect(window.location.search).toEqual(mockQuery);

    updateSearchParams(caseMissingValue.key, caseMissingValue.value);

    expect(window.location.search).toEqual('');
  });
});
