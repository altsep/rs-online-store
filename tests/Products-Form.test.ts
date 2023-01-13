import userEvent from '@testing-library/user-event';
import { getByTestId } from '@testing-library/dom';
import { createApp } from './createApp';

const { root, render } = createApp();

describe('input text field', () => {
  const input = getByTestId<HTMLInputElement>(root, 'text-search');
  const str = 'asd';

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
    const newInput = getByTestId<HTMLInputElement>(root, 'text-search');
    expect(newInput).toHaveValue(str);
  });

  it('updates search query with entered text', () => {
    const params = new URLSearchParams(window.location.search);
    expect(params.get(input.name)).toEqual(str);
  });
});
