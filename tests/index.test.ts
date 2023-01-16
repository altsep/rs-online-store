import { screen } from '@testing-library/dom';
import { createRoot } from './createApp';

const root = createRoot();
document.body.append(root);

expect(root).toBeInTheDocument();

describe('entry point', () => {
  it('renders app', async () => {
    await import('../src');

    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();

    const products = screen.getByTestId('products');
    expect(products).toBeInTheDocument();
  });
});
