import { createCard } from './creditCard/createCard';
import { createUser } from './createUser';
import { changeInputValidity } from '../validate/changeInputValidity';

export function createForm(parent: HTMLDivElement): HTMLFormElement {
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__form';

  createUser(checkoutForm);
  createCard(checkoutForm);

  parent.append(checkoutForm);

  const inputs = checkoutForm.querySelectorAll('input');

  inputs?.forEach((input) => {
    input.addEventListener('change', () => {
      changeInputValidity(input);
    });
  });

  return checkoutForm;
}
