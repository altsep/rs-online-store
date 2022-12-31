import changeInputValidity from '../../validate/changeInputValidity';
import { checkInputNumber } from '../../validate/checkInput';
import { isCardNumberValid } from '../../validate/isCardValid';
import { createField } from '../createField';

export default function createCardNumber(): HTMLInputElement {
  const cardNumber = createField('card__number', 'tel', 'Card number');
  cardNumber.onkeydown = checkInputNumber;
  cardNumber.maxLength = 19;

  cardNumber.addEventListener('keydown', (e: KeyboardEvent) => {
    const val = cardNumber.value.split('');
    if ((val.length === 4 || val.length === 9 || val.length === 14) && e.key !== 'Backspace') {
      val.push(' ');
    }
    console.log(cardNumber.value.length);
    cardNumber.value = val.join('');
  });

  changeInputValidity(cardNumber, isCardNumberValid);

  return cardNumber;
}
