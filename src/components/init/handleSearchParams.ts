import { storeSearchString } from '../../utility';

function handleSearchParams(pathname: string): void {
  const searchStorageItem = localStorage.getItem('aahh-rs-os-search');

  // Append the retrieved search query to the current href if the path leads to page with filters
  if (/\/products$/.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }

  const params = new URLSearchParams(searchStorageItem || window.location.search);

  const form = document.querySelector<HTMLFormElement>('.filters__form');

  if (form) {
    // Create an array of form controls and iterate over it
    [...form.elements].forEach((el) => {
      const { id } = el;

      const paramsValue = params.get(id) || '';

      // Process input elements according to their type
      if (el instanceof HTMLInputElement && id === 'text') {
        el.value = paramsValue;
        el.dispatchEvent(new Event('input'));
      }

      if (el instanceof HTMLSelectElement) {
        const option = el.querySelector(`option[value="${paramsValue}"]`);
        option?.setAttribute('selected', '');
        el.dispatchEvent(new Event('change'));
      }

      // Store search string in localStorage on change in any element in the list
      el.addEventListener('change', storeSearchString);
    });
  }
}

export default handleSearchParams;
