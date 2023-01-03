import { isFieldValid } from './isFieldValid';

export function changeInputValidity(input: HTMLInputElement): void {
  const error = document.querySelector(`.${input.name}.field__error`);
  if (isFieldValid(input)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    error?.classList.add('hidden');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
    error?.classList.remove('hidden');
  }
}
