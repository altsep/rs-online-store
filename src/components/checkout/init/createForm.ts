import createCard from "./createCard";
import createUser from "./createUser";

export default function createForm(parent: HTMLDivElement): HTMLFormElement {
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__form';
  checkoutForm.action = '';

  // User's personal data
  const userContainer = createUser('checkout__user_container')
  checkoutForm.append(userContainer);

  // credit card
  const cardContainer = createCard(checkoutForm);

  parent.append(checkoutForm);

  return checkoutForm;
}