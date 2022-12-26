export default function initSubmitButton(): HTMLButtonElement {
  const submitBtn = document.createElement('button');
  submitBtn.className = 'checkout__submit_btn';
  submitBtn.textContent = 'Buy';
  submitBtn.disabled = true;

  return submitBtn;
}