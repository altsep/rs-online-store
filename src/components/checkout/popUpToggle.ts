export function openPopUp(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.add('active');
  document.querySelector('#root')?.classList.add('lock');
  const popUpContent = document.querySelector<HTMLDivElement>('.checkout__pop-up_content');
  popUpContent?.classList.remove('hidden');
  const submitMessage = document.querySelector<HTMLDivElement>('.submit-message');
  submitMessage?.classList.add('hidden');
}

export function closePopUp(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  document.querySelector('#root')?.classList.remove('lock');
  popUp?.classList.remove('active');
}
