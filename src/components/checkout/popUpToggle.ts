// todo: rename to open/close popUp modal

export function popUpActive(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.add('active');
  const popUpContent = document.querySelector<HTMLDivElement>('.checkout__pop-up_content');
  popUpContent?.classList.remove('hidden');
  const submitMessage = document.querySelector<HTMLDivElement>('.submit-message');
  submitMessage?.classList.add('hidden');
}
export function popUpRemove(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.remove('active');
}

export default { popUpActive, popUpRemove };