import { handleHistory } from '../../src/utility';

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
