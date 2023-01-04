import { isCardCodeValid, isCardNumberValid, isExpirationDateValid } from './isCardValid';
import { isAdressValid, isEmailValid, isNameValid, isPhoneValid } from './isUserValid';

export function isFieldValid(input: HTMLInputElement): boolean {
  switch (input.name) {
    case 'user-name':
      return isNameValid(input);
    case 'phone-number':
      return isPhoneValid(input);
    case 'adress':
      return isAdressValid(input);
    case 'email':
      return isEmailValid(input);
    case 'card__number':
      return isCardNumberValid(input);
    case 'card__valid':
      return isExpirationDateValid(input);
    case 'card__code':
      return isCardCodeValid(input);
    default:
      return true;
  }
}
