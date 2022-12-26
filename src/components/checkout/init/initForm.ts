import createCard from "./createCard";
import createUser from "./createUser";

export default function initForm(): HTMLFormElement {
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__form';

  // title
  const personalDetails = document.createElement('h3');
  personalDetails.className = 'checkout__personal-details heading';
  personalDetails.textContent = 'Personal details';
  checkoutForm.append(personalDetails);

  const userContainer = createUser('checkout__user_container')
  checkoutForm.append(userContainer);

  // credit card
  const cardContainer = document.createElement('div');
  cardContainer.className = 'checkout__card_container';
  checkoutForm.append(cardContainer);
  // title
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card__title';
  cardTitle.textContent = 'Card details';
  cardContainer.append(cardTitle);
  // credit card fields
  const cardDetails = createCard('card-details');
  cardContainer.append(cardDetails);

  return checkoutForm;
}