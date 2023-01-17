import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { handleHistory } from '../src/utility';
import { createApp } from './createApp';

createApp();

describe('App', () => {
  it('renders main', () => {
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });

  const testCases = [
    { path: '/products', testid: 'products' },
    { path: '/products/1', testid: 'details' },
    { path: '/cart', testid: 'cart' },
    { path: '/asdfgh1234', testid: 'not-found' },
  ];

  it('renders pages', async () => {
    const firstCardAddBtn = screen.getAllByTitle('Add to cart')[0];

    await userEvent.click(firstCardAddBtn);

    testCases.forEach(({ path, testid }) => {
      handleHistory(path);
      const el = screen.getByTestId(testid);
      expect(el).toBeInTheDocument();
    });
  });
});
