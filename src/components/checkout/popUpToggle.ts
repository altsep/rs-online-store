export function openPopUp(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.add('active');
  const popUpContent = document.querySelector<HTMLDivElement>('.checkout__pop-up_content');
  popUpContent?.classList.remove('hidden');
  const submitMessage = document.querySelector<HTMLDivElement>('.submit-message');
  submitMessage?.classList.add('hidden');
}
export function closePopUp(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.remove('active');
}

export default { openPopUp, closePopUp };
