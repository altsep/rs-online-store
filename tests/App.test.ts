import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { App } from '../src/components/init';
import { handleHistory } from '../src/utility';

const root = document.createElement('div');
root.id = 'root';

document.body.append(root);

const app = new App(root);
app.render();

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
