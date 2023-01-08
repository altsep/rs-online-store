import { Product } from "../../../../constants";
import { createSlides } from "./createSlides";
import placeholder  from '../../../../assets/images/placeholder.png'
import { ChangeMainPhoto } from "./changeMainPhoto";

export function createPhoto(product: Product): HTMLDivElement {
  const productPhoto = document.createElement('div');
  productPhoto.className = 'product__photo';

  const { images, thumbnail } = product;
  console.log(product, images);

  const mainPhotoContainer = document.createElement('div');
  mainPhotoContainer.className = 'main-photo__container';

  const mainPhoto = document.createElement('img');
  mainPhoto.className = 'main-photo';
  mainPhoto.src = images.length ? images[0] : placeholder;

  mainPhotoContainer.append(mainPhoto);
  const slides = createSlides(product);
  slides.addEventListener('click', ChangeMainPhoto);

  productPhoto.append(mainPhotoContainer, slides);

  return productPhoto;
}

//   id: number;
  //   title: string;
  //   description: string;
  //   price: number;
  //   discountPercentage: number;
  //   rating: number;
  //   stock: number;
  //   brand: string;
  //   category: string;
  //   thumbnail: string;
  //   images: string[];
  // }