import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createApp } from './createApp';
import { INITIAL_PRODUCTS, MAX_CARDS } from '../src/constants';

const { render } = createApp();

describe('text search field', () => {
  let input: HTMLInputElement;
  let str: string;

  beforeEach(() => {
    str = 'asd';
    input = screen.getByTestId<HTMLInputElement>('text-search');
  });

  it('renders with value set to empty string', () => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('accepts text input', async () => {
    await userEvent.type(input, str);
    expect(input).toHaveValue(str);
  });

  it('on reload restores previously set text', () => {
    render();
    expect(input).toHaveValue(str);
  });

  it('updates search query with entered text', () => {
    const params = new URLSearchParams(window.location.search);
    expect(params.get(input.name)).toEqual(str);
  });

  it('filters cards', async () => {
    str = 'oppo';

    await userEvent.clear(input);
    await userEvent.type(input, str);
    const cards = screen.getAllByTestId('card');
    const len = INITIAL_PRODUCTS.slice(0, MAX_CARDS).filter((el) => el.brand.toLowerCase() === str).length;

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(str);
    expect(cards.length).toEqual(len);
  });
});
