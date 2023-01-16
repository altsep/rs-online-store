import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createApp } from '../createApp';
import { INITIAL_PRODUCTS, MAX_CARDS } from '../../src/constants';

const { render } = createApp();

describe('text search field', () => {
  interface Mocks {
    str: string;
    input: HTMLInputElement;
  }

  const setup = (str = 'asd'): Mocks => {
    const input = screen.getByTestId<HTMLInputElement>('text-search');
    return { str, input };
  };

  it('renders with value set to empty string', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('accepts text input', async () => {
    const { input, str } = setup();
    await userEvent.type(input, str);
    expect(input).toHaveValue(str);
  });

  it('on reload restores previously set text', () => {
    const { input, str } = setup();
    render();
    expect(input).toHaveValue(str);
  });

  it('updates search query with entered text', () => {
    const { input, str } = setup();
    const params = new URLSearchParams(window.location.search);
    expect(params.get(input.name)).toEqual(str);
  });

  it('filters cards', async () => {
    const { input, str } = setup('oppo');

    await userEvent.clear(input);
    await userEvent.type(input, str);
    const cards = screen.getAllByTestId('card');
    const len = INITIAL_PRODUCTS.slice(0, MAX_CARDS).filter((el) => el.brand.toLowerCase() === str).length;

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(str);
    expect(cards.length).toEqual(len);
  });
});
