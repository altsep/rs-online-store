import type { Props } from '../../../../constants';
import { updateURL } from '../../../../utility';

const handleChange = (e: Event, { state, initialProducts }: Props): void => {
  const { selectedOptions } = e.target as HTMLSelectElement;

  const selected = selectedOptions[0];

  const { value } = selected;

  switch (value) {
    case 'price asc':
      state.products.sort((a, b) => a.price - b.price);
      break;
    case 'price desc':
      state.products.sort((a, b) => b.price - a.price);
      break;
    case 'rating asc':
      state.products.sort((a, b) => a.rating - b.rating);
      break;
    case 'rating desc':
      state.products.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount asc':
      state.products.sort((a, b) => a.discountPercentage - b.discountPercentage);
      break;
    case 'discount desc':
      state.products.sort((a, b) => b.discountPercentage - a.discountPercentage);
      break;
    default:
      // Sort in the initial order
      state.products.sort((a, b) => a.id - b.id);
      break;
  }

  updateURL('sort', value);
};

export default handleChange;
