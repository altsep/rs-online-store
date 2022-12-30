import isNameValid from "../form/validate/isUserValid";
import isPhoneValid from "../form/validate/isUserValid";
import createField from "./createField";

export default function createUser(className: string): HTMLDivElement {

  const UserContainer = document.createElement('div');
  UserContainer.className = className;

  const personalDetails = document.createElement('h3');
  personalDetails.className = 'checkout__personal-details';
  personalDetails.textContent = 'Personal details';
  UserContainer.append(personalDetails);

  const userName = createField('checkout__input user-name', 'text', 'Name');

  const userPhoneNumber = createField('checkout__input phone-number', 'tel', 'Phone number');

  const userAdress = createField('checkout__input adress', 'text', 'Delivery adress');
  const userEmail = createField('checkout__input email', 'email', 'E-mail');

  UserContainer.append(userName, userPhoneNumber, userAdress, userEmail)

  return UserContainer;
}