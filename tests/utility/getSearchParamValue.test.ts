import { getSearchParamValue, updateSearchParams } from '../../src/utility';

describe('getSearchParamValue', () => {
  it('able to retrieve param value from search', () => {
    const testCases = [
      { key: '', value: '' },
      { key: 'emptyParam', value: '' },
      { key: 'name', value: 'value' },
      { key: 'range', value: '1-6000' },
    ];

    testCases.forEach(({ key, value }) => {
      updateSearchParams(key, value);
    });

    testCases.forEach(({ key, value }) => {
      const result = getSearchParamValue(key);
      expect(result).toEqual(value);
    });
  });
});
