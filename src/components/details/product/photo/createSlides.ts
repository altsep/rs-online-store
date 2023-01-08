import { Product } from "../../../../constants";
import { ChangeMainPhoto } from "./changeMainPhoto";

export function createSlides(product: Product): HTMLDivElement {
  const slides = document.createElement('div');
  slides.className = 'photo__slides';

  const { images } = product;

  const createSlide = (img: string) => {
    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.alt = 'Product preview';
    slide.src = img;

    return slide;
  }


  images.forEach((img) => {
    const slide = createSlide(img);

    slides.append(slide);
  })

  return slides;
}