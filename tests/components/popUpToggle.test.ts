import { fireEvent, getByTestId } from "@testing-library/dom";
import { openPopUp } from "../../src/components/checkout/popUpToggle";
import { createApp } from "../createApp";

const { root, render } = createApp();

describe('openPopUp', () => {
  render();
  const popUp = getByTestId<HTMLDivElement>(root, 'checkout__pop-up');

  openPopUp();
  it('expected popUp to be active', () => {
    expect(popUp.classList.contains('active')).toBe(true);
  })
})

describe('closePopUp', () => {
  render();
  const popUp = getByTestId<HTMLDivElement>(root, 'checkout__pop-up');
  popUp.classList.add('active');

  it('expected popUp to be closed by click', () => {
    fireEvent.click(popUp);
    expect(popUp.classList.contains('active')).toBe(false);
  })
});