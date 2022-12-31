export default function changeInputValidity(input: HTMLInputElement, callback: (e: HTMLInputElement) => boolean): void {
  input.addEventListener('input', (e) => {
    const target = e.target as HTMLElement;
    const label = document.querySelector(`label[for="${input.name}"]`);
    console.log(label);
    if (callback(input)) {
      target?.classList.add('valid');
      target?.classList.remove('invalid');
      label?.classList.add('hidden');
    } else {
      target?.classList.add('invalid');
      target?.classList.remove('valid');
      label?.classList.remove('hidden');
    }
  });
}
