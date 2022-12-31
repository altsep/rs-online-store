import createCard from './creditCard/createCard';
import createUser from './createUser';

export default function createForm(parent: HTMLDivElement): HTMLFormElement {
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__form';
  checkoutForm.action = '';

  createUser(checkoutForm);
  createCard(checkoutForm);

  parent.append(checkoutForm);

  return checkoutForm;
}
