import { checkInputNumber } from '../../validate/checkInput';
import { createField } from '../createField';

export function createCardNumber(): HTMLInputElement {
  const cardNumber = createField('card__number', 'text', 'Card number');
  cardNumber.maxLength = 19;

  cardNumber.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!checkInputNumber(e)) {
      e.preventDefault();
    }

    const val = cardNumber.value.split('');
    if ((val.length === 4 || val.length === 9 || val.length === 14) && e.key !== 'Backspace') {
      val.push(' ');
    }
    cardNumber.value = val.join('');
  });

  return cardNumber;
}
