import { getByTestId } from '@testing-library/dom';
import { handleHistory } from '../src/utility';
import { createApp } from './createApp';

const { root } = createApp();

describe('App', () => {
  it('renders main', () => {
    const main = getByTestId(root, 'main');
    expect(main).toBeInTheDocument();
  });

  const testCases = [
    { path: '/products', id: 'products' },
    { path: '/products/1', id: 'details' },
    { path: '/cart', id: 'cart' },
    { path: '/asdfgh1234', id: 'not-found' },
  ];

  it('renders pages', () => {
    testCases.forEach(({ path, id }) => {
      handleHistory(path);
      const el = getByTestId(root, id);
      expect(el).toBeInTheDocument();
    });
  });
});
