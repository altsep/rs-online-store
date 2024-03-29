import { fireEvent, getByTestId } from '@testing-library/dom';
import { openPopUp } from '../../src/components/checkout/popUpToggle';
import { createApp } from '../createApp';

const { root } = createApp();

describe('openPopUp', () => {
  const popUp = getByTestId<HTMLDivElement>(root, 'checkout__pop-up');

  openPopUp();
  it('expected popUp to be active', () => {
    expect(popUp).toHaveClass('active');
  });
});

describe('closePopUp', () => {
  const popUp = getByTestId<HTMLDivElement>(root, 'checkout__pop-up');
  popUp.classList.add('active');

  it('expected popUp to be closed by click', () => {
    fireEvent.click(popUp);
    expect(popUp).not.toHaveClass('active');
  });
});
