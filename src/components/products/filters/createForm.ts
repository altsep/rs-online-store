import type { Props } from '../../../constants';
import createTextInput from './text';
import createSelect from './sort';
import createButtons from './buttons';
import createCheckboxes from './checkboxes';
import createSlider from './slider';
import handleForm from './handleForm';

function createForm(props: Props): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'filters__form';

  // Text search, controls and items counter
  const select = createSelect('sort');
  const textInput = createTextInput('text');

  const textSortContainer = document.createElement('div');
  textSortContainer.className = 'controls';

  const productsFoundNode = document.createElement('div');
  productsFoundNode.className = 'filters__form-products-found';
  productsFoundNode.textContent = `Found: ${props.state.products.length}`;

  const buttons = createButtons();

  textSortContainer.append(select, textInput, productsFoundNode);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'controls';

  buttonsContainer.append(buttons);

  // Categories
  const categoryCheckboxes = createCheckboxes(props, 'category');
  const brandCheckboxes = createCheckboxes(props, 'brand');

  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'controls';

  categoriesContainer.append(categoryCheckboxes, brandCheckboxes);

  // Sliders
  const priceSlider = createSlider(props, 'price');
  const stockSlider = createSlider(props, 'stock');

  const slidersContainer = document.createElement('div');
  slidersContainer.className = 'controls';

  slidersContainer.append(priceSlider, stockSlider);

  form.append(textSortContainer, buttonsContainer, categoriesContainer, slidersContainer);

  handleForm(form); // Subscribe form to handling functions, main form update logic gets called inside this method

  return form;
}

export default createForm;
