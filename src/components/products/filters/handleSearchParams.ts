import type { FilterElement } from './handlingFns';

function handleSearchParams(form: HTMLFormElement): void {
  const { pathname } = window.location;
  const searchStorageItem = localStorage.getItem('aahh-rs-os-search');

  // Append the retrieved search query to the current href if the path leads to page with filters
  if (/\/products$/.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }

  const params = new URLSearchParams(searchStorageItem || window.location.search);

  // Create an array of form controls and iterate over it
  [...form.elements].forEach((el) => {
    const { name, type } = el as FilterElement;

    const paramsValue = params.get(name) || '';

    // Process input elements according to their type
    if (el instanceof HTMLInputElement) {
      if (type === 'text') {
        el.value = paramsValue;
      }

      if (type === 'checkbox') {
        const checkedValues = paramsValue.split('|');
        if (checkedValues.includes(el.value)) {
          el.checked = true;
        }
      }

      if (type === 'range' && paramsValue) {
        const [min, max] = paramsValue.split('-');
        if (el.classList.contains('first')) {
          el.value = min;
        } else {
          el.value = max;
        }
      }
    }

    if (el instanceof HTMLSelectElement) {
      const option = el.querySelector<HTMLOptionElement>(`option[value="${paramsValue}"]`);
      if (option) {
        option.selected = true;
      }
    }
  });

  // Run filters and render cards by triggering a handling function in handleForm.ts
  form.dispatchEvent(new Event('input'));
}

export default handleSearchParams;
