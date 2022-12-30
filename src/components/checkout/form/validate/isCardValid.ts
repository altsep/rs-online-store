export function isCardNumberValid(input: HTMLInputElement): boolean {
  const number = input.value;
  return number.length === 19;
}

export function isExpirationDateValid(input: HTMLInputElement): boolean {
  const date = input.value;
  const month = date.length > 2 ? +date.split(' / ')[0] : +date;
  const year = date.length > 2 ? +date.split(' / ')[1] : 0;
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (month > 12) {
    return false;
  }
  if (year < currentYear) {
    return false;
  }
  if (year === currentYear && month < currentMonth) {
    return false;
  }
  return true;
}

export function isCardCodeValid(input: HTMLInputElement): boolean {
  const code = input.value;
  return code.length === 3;
}

export default {
  isCardNumberValid,
  isExpirationDateValid,
  isCardCodeValid,
};
