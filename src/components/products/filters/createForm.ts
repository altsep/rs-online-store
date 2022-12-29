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

  // Text search and controls
  const select = createSelect('sort');
  const textInput = createTextInput('text');
  const buttons = createButtons();

  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'controls';

  controlsContainer.append(select, textInput, buttons);

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

  form.append(controlsContainer, categoriesContainer, slidersContainer);

  handleForm(form); // Subscribe form to handling functions, main form update logic gets called inside this method

  return form;
}

export default createForm;
