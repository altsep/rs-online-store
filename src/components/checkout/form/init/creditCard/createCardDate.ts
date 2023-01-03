import { checkInputNumber } from '../../validate/checkInput';
import { createField } from '../createField';

export function createCardDate(): HTMLInputElement {
  const cardExpirationDate = createField('card__valid', 'text', 'MM / YY');

  const onKeyDown = (e: KeyboardEvent): void => {
    const { value } = e.target as HTMLInputElement;
    const isAlphanumericKey = /^\w$/.test(e.key);

    if (!checkInputNumber(e) || (value.replace(/\D/g, '').length > 3 && isAlphanumericKey)) {
      e.preventDefault();
    }

    if (value.length === 2 && isAlphanumericKey) {
      const separator = ' / ';
      cardExpirationDate.value += separator;
    }
  };

  cardExpirationDate.addEventListener('keydown', onKeyDown);

  return cardExpirationDate;
}
