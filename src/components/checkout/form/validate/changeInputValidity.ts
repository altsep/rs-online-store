export function changeInputValidity(input: HTMLInputElement, callback: (e: HTMLInputElement) => boolean): void {
  input.addEventListener('change', (e) => {
    const target = e.target as HTMLElement;
    const error = document.querySelector(`.${input.name}.field__error`);
    console.log(error);
    if (callback(input)) {
      target?.classList.add('valid');
      target?.classList.remove('invalid');
      error?.classList.add('hidden');
    } else {
      target?.classList.add('invalid');
      target?.classList.remove('valid');
      error?.classList.remove('hidden');
    }
  });
}
