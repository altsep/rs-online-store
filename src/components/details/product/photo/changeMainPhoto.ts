export function ChangeMainPhoto(e: MouseEvent): void {
  const mainPhoto = document.querySelector<HTMLImageElement>('.main-photo');
  const slides = document.querySelectorAll<HTMLImageElement>('.slide');
  const target = e.target as HTMLImageElement;
  console.log(target);
  if (mainPhoto) {
    mainPhoto.src = target?.src;
  }
  slides.forEach((slide) => {
    if (slide === target) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}
