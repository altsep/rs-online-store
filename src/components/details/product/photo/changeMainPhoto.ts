export function ChangeMainPhoto(e: MouseEvent): void {
  const mainPhotoContainer = document.querySelector<HTMLAnchorElement>('.main-photo__container');
  const mainPhoto = document.querySelector<HTMLImageElement>('.main-photo');
  const slides = document.querySelectorAll<HTMLImageElement>('.slide');
  const target = e.target as HTMLImageElement;

  if (mainPhotoContainer && mainPhoto && target.classList.contains('slide')) {
    mainPhotoContainer.href = target.src;
    mainPhoto.src = target.src;

    slides.forEach((slide) => {
      if (slide === target) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }
}
