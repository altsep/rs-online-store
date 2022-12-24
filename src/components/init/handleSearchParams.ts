function handleSearchParams(pathname: string): void {
  const searchStorageItem = localStorage.getItem('aahh-rs-os-search');

  // Append the retrieved search query to the current href if the path leads to page with filters
  if (/\/products$/.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }

  const params = new URLSearchParams(searchStorageItem || '');

  document.querySelectorAll('input').forEach((el) => {
    const { name, type } = el;

    const paramsValue = params.get(name) || '';

    // Process input elements according to their type
    switch (type) {
      // Set input value to search param under the corresponding name
      case 'text':
        el.value = paramsValue;
        el.dispatchEvent(new Event('input'));
        break;
      default:
        break;
    }

    // Store search string on input
    const handleChange = (): void => localStorage.setItem('aahh-rs-os-search', window.location.search);

    el.addEventListener('change', handleChange);
  });
}

export default handleSearchParams;
