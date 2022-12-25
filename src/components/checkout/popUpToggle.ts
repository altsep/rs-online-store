export function popUpActive(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.add('active');
}
export function popUpRemove(): void {
  const popUp = document.querySelector<HTMLDivElement>('.checkout__pop-up');
  popUp?.classList.remove('active');
}

export default { popUpActive, popUpRemove };