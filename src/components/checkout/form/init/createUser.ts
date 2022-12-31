import changeInputValidity from '../validate/changeInputValidity';
import { checkInputTel } from '../validate/checkInput';
import { isAdressValid, isEmailValid, isNameValid, isPhoneValid } from '../validate/isUserValid';
import { createField } from './createField';

import createFieldContainer from './createFieldContainer';

export default function createUser(parent: HTMLFormElement): void {
  const UserContainer = document.createElement('div');
  UserContainer.className = 'checkout__user_container';

  const personalDetails = document.createElement('h3');
  personalDetails.className = 'checkout__personal-details';
  personalDetails.textContent = 'Personal details';
  UserContainer.append(personalDetails);

  const userName = createField('checkout__input user-name', 'text', 'Name');
  changeInputValidity(userName, isNameValid);
  createFieldContainer(UserContainer, userName);

  const userPhoneNumber = createField('checkout__input phone-number', 'tel', 'Phone number');
  userPhoneNumber.onkeydown = checkInputTel;
  changeInputValidity(userPhoneNumber, isPhoneValid);
  createFieldContainer(UserContainer, userPhoneNumber);

  const userAdress = createField('checkout__input adress', 'text', 'Delivery adress');
  changeInputValidity(userAdress, isAdressValid);
  createFieldContainer(UserContainer, userAdress);

  const userEmail = createField('checkout__input email', 'email', 'E-mail');
  changeInputValidity(userEmail, isEmailValid);
  createFieldContainer(UserContainer, userEmail);

  parent.append(UserContainer);
}
