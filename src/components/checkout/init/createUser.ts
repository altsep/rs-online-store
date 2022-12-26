import createField from "./createField";

export default function createUser(className: string): HTMLDivElement {

  const UserContainer = document.createElement('div');
  UserContainer.className = className;

  const userName = createField('checkout__input_user-name', 'text', 'Name');
  const userPhoneNumber = createField('checkout__input_phone-number', 'tel', 'Phone number');
  const userAdress = createField('checkout__input_adress', 'text', 'Delivery adress');
  const userEmail = createField('checkout__input_email', 'email', 'E-mail');

  UserContainer.append(userName, userPhoneNumber, userAdress, userEmail)

  return UserContainer;
}