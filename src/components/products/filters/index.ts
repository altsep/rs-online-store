import type { Props } from '../../../constants';
import angleDown from '../../../assets/icons/angle-down.svg';
import angleUp from '../../../assets/icons/angle-up.svg';
import createTextInput from './text';
import createSelect from './sort';
import createButtons from './buttons';
import handleSearchParams from './handleSearchParams';
import handleForm from './handleForm';

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

  const select = createSelect(props, 'sort');

  const textInput = createTextInput(props.state, 'text');

  const buttons = createButtons();

  form.append(select, textInput, buttons);

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
