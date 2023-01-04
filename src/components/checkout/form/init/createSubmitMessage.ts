export function createSubmitMessage(): HTMLDivElement {
  const submitMessage = document.createElement('div');
  submitMessage.classList.add('submit-message', 'hidden');
  const submitMessageText = document.createElement('span');
  submitMessageText.className = 'submit-message__text';
  submitMessageText.textContent = 'Thank you for order. \nRedirect to the main page: ';
  const submitTimer = document.createElement('span');
  submitTimer.className = 'submit-message__timer';
  submitTimer.textContent = '5s.';

  submitMessage.append(submitMessageText, submitTimer);

  return submitMessage;
}
