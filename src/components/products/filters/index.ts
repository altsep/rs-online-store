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

  // const dropdownText = document.createElement('span');
  // dropdownText.className = 'filters__dropdown-text';
  // dropdownText.textContent = 'Hide';

  const icon = document.createElement('img');
  icon.className = 'filters__dropdown-img';
  icon.src = angleDown;

  dropdown.append(dropdownHeading, icon);

  const form = document.createElement('form');
  form.className = 'filters__form';

  const textInput = createTextFilter(state);

  form.append(textInput);

  filters.append(dropdown, form);

  dropdown.addEventListener('mousedown', () => {
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
