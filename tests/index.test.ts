import { screen } from '@testing-library/dom';

document.body.id = 'root';

describe('entry point', () => {
  it('renders app', async () => {
    await import('../src');

    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();

    const products = screen.getByTestId('products');
    expect(products).toBeInTheDocument();
  });
});
