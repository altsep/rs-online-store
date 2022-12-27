import type { Props } from '../../../constants';
import angleDown from '../../../assets/icons/angle-down.svg';
import angleUp from '../../../assets/icons/angle-up.svg';
import createTextInput from './text';
import createSelect from './sort';
import createButtons from './buttons';
import handleSearchParams from './handleSearchParams';
import handleForm from './handleForm';
import createCheckboxes from './checkboxes';
import createSlider from './slider';

function createFilters(props: Props): HTMLDivElement {
  const filters = document.createElement('div');
  filters.className = 'filters';

  let display = true;

  const dropdown = document.createElement('div');
  dropdown.className = 'filters__dropdown';
  dropdown.title = 'Hide';

  const dropdownHeading = document.createElement('h3');
  dropdownHeading.className = 'filters__dropdown-heading';
  dropdownHeading.textContent = 'Filters';

  const icon = document.createElement('img');
  icon.className = 'filters__dropdown-img';
  icon.src = angleDown;
  icon.alt = '';

  dropdown.append(dropdownHeading, icon);

  const form = document.createElement('form');
  form.className = 'filters__form';

  const select = createSelect('sort');

  const textInput = createTextInput('text');

  const buttons = createButtons();

  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'controls';

  controlsContainer.append(select, textInput, buttons);

  const categoryCheckboxes = createCheckboxes(props, 'category');

  const brandCheckboxes = createCheckboxes(props, 'brand');

  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'controls';

  categoriesContainer.append(categoryCheckboxes, brandCheckboxes);

  const priceSlider = createSlider(props, 'price');

  const stockSlider = createSlider(props, 'stock');

  const slidersContainer = document.createElement('div');
  slidersContainer.className = 'controls';

  slidersContainer.append(priceSlider, stockSlider);

  form.append(controlsContainer, categoriesContainer, slidersContainer);

  filters.append(dropdown, form);

  icon.addEventListener('mousedown', () => {
    if (display) {
      dropdown.title = 'Show';
      form.classList.add('hidden');
      icon.src = angleUp;
    } else {
      dropdown.title = 'Hide';
      form.classList.remove('hidden');
      icon.src = angleDown;
    }

    display = !display;
  });

  handleSearchParams(form);

  handleForm(form);

  return filters;
}

export default createFilters;
