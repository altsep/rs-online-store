export default function createSubmitButton(parent: HTMLFormElement): HTMLButtonElement {
  const submitBtn = document.createElement('button');
  submitBtn.className = 'checkout__submit_btn';
  submitBtn.textContent = 'Buy';
  submitBtn.disabled = true;

  parent.append(submitBtn);

  return submitBtn;
}