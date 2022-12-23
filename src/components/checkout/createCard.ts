import createField from "./createField";

export default function createCard(className: string): HTMLDivElement {

  const cardDetails = document.createElement('div');
  cardDetails.className = className;

  const cardNumber = createField('card__number', 'number', 'Card number');
  const cardExpirationDate = createField('card__valid', 'number', 'MM / YY');
  const cardCode = createField('card__code', 'number', 'CVV / CVC')

  cardDetails.append(cardNumber, cardExpirationDate, cardCode)

  return cardDetails;
}
