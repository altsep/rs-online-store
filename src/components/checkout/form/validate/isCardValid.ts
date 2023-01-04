export function isCardNumberValid(input: HTMLInputElement): boolean {
  const number = input.value;
  return number.length === 19;
}

export function isExpirationDateValid(input: HTMLInputElement): boolean {
  const date = input.value;

  // get expiration card date from user input, because deta is separated with '/'
  const m = Number(date.split(' / ')[0]);
  const y = Number(date.split(' / ')[1]);

  const month = date.length > 2 ? m : Number(date);
  const year = date.length > 2 ? y : 0;

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
