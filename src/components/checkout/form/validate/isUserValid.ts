export function isNameValid(input: HTMLInputElement): boolean {
  const name = input.value.split(' ');
  return name.length > 1 && name.every((w) => w.length > 2);
}

export function isAdressValid(input: HTMLInputElement): boolean {
  const adress = input.value.split(' ');
  return adress.length > 2 && adress.every((w) => w.length > 4);
}

export function isPhoneValid(input: HTMLInputElement): boolean {
  const phone = input.value;
  return phone.length > 9 && phone[0] === '+';
}

export function isEmailValid(input: HTMLInputElement): boolean {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]*)$/;
  const email = input.value;

  return reg.test(email);
}

export default {
  isNameValid,
  isAdressValid,
  isPhoneValid,
  isEmailValid,
};
