import { checkInputNumber } from '../validate/checkInput';
import { createField } from './createField';

import { createFieldContainer } from './createFieldContainer';

export function createUser(parent: HTMLFormElement): void {
  const UserContainer = document.createElement('div');
  UserContainer.className = 'checkout__user_container';

  const personalDetails = document.createElement('h3');
  personalDetails.className = 'checkout__personal-details';
  personalDetails.textContent = 'Personal details';
  UserContainer.append(personalDetails);

  const userName = createField('user-name', 'text', 'Name');
  createFieldContainer(UserContainer, userName);

  const userPhoneNumber = createField('phone-number', 'tel', 'Phone number');
  userPhoneNumber.addEventListener('keydown', (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (!checkInputNumber(e.key, '+') || (value.length && e.key === '+')) {
      e.preventDefault();
    }
  });
  createFieldContainer(UserContainer, userPhoneNumber);

  const userAdress = createField('adress', 'text', 'Delivery adress');
  createFieldContainer(UserContainer, userAdress);

  const userEmail = createField('email', 'email', 'E-mail');
  createFieldContainer(UserContainer, userEmail);

  parent.append(UserContainer);
}
