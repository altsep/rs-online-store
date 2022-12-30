export default function changeInputValidity(input: HTMLInputElement, callback: Function):void {
  input.addEventListener('input', (e) => {
    const target = e.target  as HTMLElement;
    if (callback(input)) {
      target?.classList.add('valid');
      target?.classList.remove('invalid');
    } else {
      target?.classList.add('invalid');
      target?.classList.remove('valid');
    }
  })
}