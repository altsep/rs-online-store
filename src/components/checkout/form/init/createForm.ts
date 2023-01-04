import { createCard } from './creditCard/createCard';
import { createUser } from './createUser';
import { changeInputValidity } from '../validate/changeInputValidity';

export function createForm(parent: HTMLDivElement): HTMLFormElement {
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__form';

  createUser(checkoutForm);
  createCard(checkoutForm);

  parent.append(checkoutForm);

  const handleChange = (e: Event): void => {
    if (e.target instanceof HTMLInputElement) {
      const { value, type } = e.target;

      if (type === 'text') {
        e.target.value = value.trim();
      }

      changeInputValidity(e.target);
    }
  };

  checkoutForm.addEventListener('change', handleChange);

  return checkoutForm;
}
