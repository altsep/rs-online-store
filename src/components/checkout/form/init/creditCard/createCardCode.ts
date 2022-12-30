import changeInputValidity from '../../validate/changeInputValidity';
import { checkInputNumber } from '../../validate/checkInput';
import { isCardCodeValid } from '../../validate/isCardValid';
import { createField } from '../createField';

export function createCardCode(): HTMLInputElement {
  const cardCode = createField('card__code', 'tel', 'CVV / CVC');
  cardCode.maxLength = 3;
  cardCode.minLength = 3;
  cardCode.onkeydown = checkInputNumber;
  changeInputValidity(cardCode, isCardCodeValid);

  return cardCode;
}
