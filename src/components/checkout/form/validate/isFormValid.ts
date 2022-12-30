export default function isFormValid(): boolean {
  const form = document.querySelector<HTMLFormElement>('.checkout__form');
  const inputs = form?.querySelectorAll('input');
  let result = true;

  inputs?.forEach((item) => {
    if (item.classList.contains('invalid') || !item.value) {
      result = false;
      return;
    }
  });
  return result;
}