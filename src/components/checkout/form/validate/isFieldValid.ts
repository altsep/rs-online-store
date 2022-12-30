export function isfieldValid(field: HTMLInputElement, reg: RegExp): boolean {
  // const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const email = field.value;

  return reg.test(email);
}

export const validatePattern = {
  name: /\w{3, }\s\w{3, }+/,
  phone: /\+\d{9, }/,
};
