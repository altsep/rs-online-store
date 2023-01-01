import { changeInputValidity } from '../../validate/changeInputValidity';
import { checkInputNumber } from '../../validate/checkInput';
import { isExpirationDateValid } from '../../validate/isCardValid';
import { createField } from '../createField';

export function createCardDate(): HTMLInputElement {
  const cardExpirationDate = createField('card__valid', 'tel', 'MM / YY');
  cardExpirationDate.maxLength = 7;
  cardExpirationDate.onkeydown = checkInputNumber;
  cardExpirationDate.addEventListener('keydown', (e: KeyboardEvent) => {
    const val = cardExpirationDate.value.split('');
    if (val.length === 2 && e.key !== 'Backspace') {
      val.push(' / ');
    }
    cardExpirationDate.value = val.join('');
  });

  changeInputValidity(cardExpirationDate, isExpirationDateValid);

  return cardExpirationDate;
}
