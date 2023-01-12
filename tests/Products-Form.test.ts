import userEvent from '@testing-library/user-event';
import { getByTestId } from '@testing-library/dom';
import { createApp } from './createApp';

const { root, render } = createApp();

describe('input text field', () => {
  const input = getByTestId<HTMLInputElement>(root, 'text-search');
  const str = 'asd';
  it('in the document', () => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('accepts text input', async () => {
    await userEvent.type(input, str);
    expect(input.value).toEqual(str);
  });

  it('restores previously set text on reload', () => {
    render();
    const newInput = getByTestId<HTMLInputElement>(root, 'text-search');
    expect(newInput.value).toEqual(str);
  });
});
