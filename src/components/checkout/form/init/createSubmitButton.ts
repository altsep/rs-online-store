export function createSubmitButton(parent: HTMLFormElement): HTMLButtonElement {
  const submitBtn = document.createElement('button');
  submitBtn.className = 'checkout__submit_btn btn accented';
  submitBtn.textContent = 'Submit';

  parent.append(submitBtn);

  return submitBtn;
}
