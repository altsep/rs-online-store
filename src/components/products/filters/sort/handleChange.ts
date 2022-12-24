import type { State } from '../../../../constants';
import { updateURL } from '../../../../utility';
import renderProductList from '../../renderProductList';

const handleChange = (e: Event, state: State): void => {
  const { products } = state;

  const { selectedOptions } = e.target as HTMLSelectElement;

  const selected = selectedOptions[0];

  const { value } = selected;

  switch (value) {
    case 'price asc':
      state.products = products.sort((a, b) => a.price - b.price);
      break;
    case 'price desc':
      state.products = products.sort((a, b) => b.price - a.price);
      break;
    case 'rating asc':
      state.products = products.sort((a, b) => a.rating - b.rating);
      break;
    case 'rating desc':
      state.products = products.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount asc':
      state.products = products.sort((a, b) => a.discountPercentage - b.discountPercentage);
      break;
    case 'discount desc':
      state.products = products.sort((a, b) => b.discountPercentage - a.discountPercentage);
      break;
    default:
      state.products = products;
      break;
  }

  updateURL('sort', value);

  renderProductList(state);
};

export default handleChange;
