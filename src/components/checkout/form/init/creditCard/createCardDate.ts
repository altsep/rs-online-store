import { checkInputNumber } from '../../validate/checkInput';
import { createField } from '../createField';

export function createCardDate(): HTMLInputElement {
  const cardExpirationDate = createField('card__valid', 'text', 'MM / YY');

  const onKeyDown = (e: KeyboardEvent): void => {
    const { value } = e.target as HTMLInputElement;
    const isAlphanumChar = (key: string): boolean => /^\w$/.test(key);

    if (!checkInputNumber(e) || (value.replace(/\D/g, '').length > 3 && isAlphanumChar(e.key))) {
      e.preventDefault();
    }

    if (value.length === 2 && isAlphanumChar(e.key)) {
      const separator = ' / ';
      cardExpirationDate.value += separator;
    }

    const lastSymbol = value[value.length - 1];
    if (e.key === 'Backspace' && !isAlphanumChar(lastSymbol)) {
      cardExpirationDate.value = value.replace(/(?<=\d)\W+/, '');
    }
  };

  cardExpirationDate.addEventListener('keydown', onKeyDown);

  return cardExpirationDate;
}
