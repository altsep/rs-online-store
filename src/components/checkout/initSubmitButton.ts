export default function initSubmitButton(className: string): HTMLButtonElement {
  const submitBtn = document.createElement('button');
  submitBtn.className = className;
  submitBtn.textContent = 'Confirm';
  submitBtn.disabled = true;

  return submitBtn;
}