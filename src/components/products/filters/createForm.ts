import { store } from '../../../constants';
import { createTextInput } from './text';
import { createSelect } from './sort';
import { createButtons } from './buttons';
import { createCheckboxes } from './checkboxes';
import { createSlider } from './slider';
import { handleForm } from './handleForm';

function createForm(): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'filters__form';

  // Text search, controls and items counter
  const select = createSelect('sort');
  const textInput = createTextInput('text');

  const textSortContainer = document.createElement('div');
  textSortContainer.className = 'controls';

  const productsFoundNode = document.createElement('div');
  productsFoundNode.className = 'filters__form-products-found';
  productsFoundNode.textContent = `Found: ${store.products.length}`;

  const buttons = createButtons();

  textSortContainer.append(select, textInput, productsFoundNode);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'controls';

  buttonsContainer.append(buttons);

  // Categories
  const categoryCheckboxes = createCheckboxes('category');
  const brandCheckboxes = createCheckboxes('brand');

  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'controls';

  categoriesContainer.append(categoryCheckboxes, brandCheckboxes);

  // Sliders
  const priceSlider = createSlider('price');
  const stockSlider = createSlider('stock');

  const slidersContainer = document.createElement('div');
  slidersContainer.className = 'controls';

  slidersContainer.append(priceSlider, stockSlider);

  form.append(textSortContainer, buttonsContainer, categoriesContainer, slidersContainer);

  handleForm(form); // Subscribe form to handling functions, main form update logic gets called inside this method

  return form;
}

export { createForm };
