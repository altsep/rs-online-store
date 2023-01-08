import { Product } from '../../../../constants';

export function createSlides(product: Product): HTMLDivElement {
  const slides = document.createElement('div');
  slides.className = 'photo__slides';

  const { images } = product;

  const createSlide = (img: string): HTMLImageElement => {
    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.alt = 'Product preview';
    slide.src = img;

    return slide;
  };

  images.forEach((img) => {
    const slide = createSlide(img);

    slides.append(slide);
  });

  return slides;
}
