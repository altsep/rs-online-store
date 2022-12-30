export function isNameValid(input: HTMLInputElement): boolean {
  const name = input.value.split(' ');
  return name.length > 1 && name.every(v => v.length > 2);
}

export function isAdressValid(input: HTMLInputElement): boolean {
  const adress = input.value.split(' ');
  return adress.length > 2 && adress.every(v => v.length > 4);
}

export function isPhoneValid(input: HTMLInputElement): boolean {
  const phone = input.value;
  return phone.length > 9 && phone[0] === '+';
}

export function isEmailValid(input: HTMLInputElement): boolean {
  return input.checkValidity();
}

export default {
  isNameValid,
  isAdressValid,
  isPhoneValid,
  isEmailValid
}