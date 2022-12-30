import changeInputValidity from "../form/validate/changeInputValidity";
import { isCardNumberValid,  isCardCodeValid, isExpirationDateValid } from "../form/validate/isCardValid";
import createField from "./createField";

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

  const checkInputNumber = (e: KeyboardEvent): boolean => {
    const key = e.key;
    return (key >= '0' && key <= '9') || key == 'ArrowLeft'
                    || key == 'ArrowRight' || key == 'Delete'
                    || key == 'Backspace'  || key == 'Tab';
  }

  // card inputs
  const cardNumber = createField('card__number', 'tel', 'Card number');
  cardNumber.onkeydown = checkInputNumber;
  cardNumber.maxLength = 19;

  cardNumber.addEventListener('keydown', (e) => {
    const val = cardNumber.value.split('');
    if ((val.length == 4 || val.length == 9 || val.length == 14) && e.key !== 'Backspace') {
      val.push(' ');
    }
    console.log(cardNumber.value.length);
    cardNumber.value = val.join('');
  });

  changeInputValidity(cardNumber, isCardNumberValid);

  const cardExpirationDate = createField('card__valid', 'tel', 'MM / YY');
  cardExpirationDate.maxLength = 7;
  cardExpirationDate.onkeydown = checkInputNumber;
  cardExpirationDate.addEventListener('keydown', (e) => {
    let val = cardExpirationDate.value.split('');
    if (val.length == 2 && e.key !== 'Backspace') {
      val.push(' / ');
    }
    cardExpirationDate.value = val.join('');
    console.log();
  });

  changeInputValidity(cardExpirationDate, isExpirationDateValid);

  // CVC/CCV
  const cardCode = createField('card__code', 'tel', 'CVV / CVC');
  cardCode.maxLength = 3;
  cardCode.minLength = 3;
  cardCode.onkeydown = checkInputNumber;
  changeInputValidity(cardCode, isCardCodeValid);

  cardDetails.append(cardNumber, cardExpirationDate, cardCode);

  parent.append(cardContainer);

  return cardDetails;
}
