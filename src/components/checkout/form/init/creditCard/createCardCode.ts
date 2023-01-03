import { checkInputNumber } from '../../validate/checkInput';
import { createField } from '../createField';

export function createCardCode(): HTMLInputElement {
  const cardCode = createField('card__code', 'tel', 'CVV / CVC');
  cardCode.maxLength = 3;
  cardCode.minLength = 3;
  cardCode.onkeydown = checkInputNumber;

  return cardCode;
}
