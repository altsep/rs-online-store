import { checkInputNumber } from '../../validate/checkInput';
import { createField } from '../createField';

export function createCardCode(): HTMLInputElement {
  const cardCode = createField('card__code', 'tel', 'CVV / CVC');
  cardCode.maxLength = 3;
  cardCode.minLength = 3;

  const onKeyDown = (e: KeyboardEvent): void => {
    if (!checkInputNumber(e.key)) {
      e.preventDefault();
    }
  };

  cardCode.addEventListener('keydown', onKeyDown);

  return cardCode;
}
