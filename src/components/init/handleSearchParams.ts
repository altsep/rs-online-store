function handleSearchParams(pathname: string): void {
  const searchStorageItem = localStorage.getItem('aahh-rs-os-search');

  // Append the current href with the retrieved search query if the path leads to the page with filters
  if (/\/products$/.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }

  const params = new URLSearchParams(searchStorageItem || '');

  document.querySelectorAll('input').forEach((el) => {
    const { name, type } = el;

    // Set input value to search param under the corresponding name
    if (type === 'text') {
      el.value = params.get(name) || '';
    }

    // Store search string on input
    const onChange = (): void => localStorage.setItem('aahh-rs-os-search', window.location.search);

    el.addEventListener('change', onChange);
  });
}

export default handleSearchParams;
