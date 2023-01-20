import { Product } from '../../../../constants';
import { createSlides } from './createSlides';
import placeholder from '../../../../assets/images/placeholder.png';
import { ChangeMainPhoto } from './changeMainPhoto';

export function createPhoto(product: Product): HTMLDivElement {
  const productPhoto = document.createElement('div');
  productPhoto.className = 'product__photo';

  const { images } = product;

  const imgUrl = images.length ? images[0] : placeholder;

  const mainPhotoContainer = document.createElement('a');
  mainPhotoContainer.className = 'main-photo__container';
  mainPhotoContainer.href = imgUrl;
  mainPhotoContainer.target = '_blank';
  mainPhotoContainer.rel = 'noreferrer';

  const mainPhoto = document.createElement('img');
  mainPhoto.className = 'main-photo';
  mainPhoto.src = imgUrl;
  mainPhoto.alt = '';

  mainPhotoContainer.append(mainPhoto);
  const slides = createSlides(product);
  slides.addEventListener('click', ChangeMainPhoto);

  productPhoto.append(mainPhotoContainer, slides);

  return productPhoto;
}
