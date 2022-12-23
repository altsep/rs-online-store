import { State } from '../../../constants';
import angleDown from '../../../assets/icons/angle-down.svg';
import angleUp from '../../../assets/icons/angle-up.svg';
import createTextFilter from './inputText';

function createFilters(state: State): HTMLDivElement {
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

  dropdown.append(dropdownHeading, icon);

  const form = document.createElement('form');
  form.className = 'filters__form';
  const textInput = createTextFilter(state, 'text');
  const otherTextInput = createTextFilter(state, 'otherText');

  form.append(textInput, otherTextInput);

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

  return filters;
}

export default createFilters;
