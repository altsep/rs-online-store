import changeInputValidity from '../../validate/changeInputValidity';
import { checkInputNumber } from '../../validate/checkInput';
import { isCardNumberValid, isCardCodeValid, isExpirationDateValid } from '../../validate/isCardValid';
import { createField, errorField } from '../createField';
import createFieldContainer from '../createFieldContainer';
import { createCardCode } from './createCardCode';
import { createCardDate } from './createCardDate';
import { createCardLogo } from './createCardLogo';
import { createCardNumber } from './createCardNumber';

export default function createCard(parent: HTMLElement): HTMLDivElement {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'checkout__card_container';

  // title
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card__title';
  cardTitle.textContent = 'Card details';

  cardContainer.append(cardTitle);

  // cardFields
  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  cardContainer.append(cardDetails);

  // card inputs
  const cardNumberContainer = document.createElement('div');
  cardNumberContainer.className = 'card-number__container';

  const cardNumber = createCardNumber();
  const cardLogo = createCardLogo(cardNumber);
  cardNumberContainer.append(cardLogo, cardNumber, errorField(cardNumber));

  const cardAddContainer = document.createElement('div');
  cardAddContainer.className = 'card-add_container';

  // date & CVC/CCV
  const cardExpirationDate = createCardDate();
  const cardCode = createCardCode();

  cardAddContainer.append(
    createFieldContainer(cardAddContainer, cardExpirationDate),
    createFieldContainer(cardAddContainer, cardCode)
  );

  cardDetails.append(cardNumberContainer, cardAddContainer);

  parent.append(cardContainer);

  return cardDetails;
}
