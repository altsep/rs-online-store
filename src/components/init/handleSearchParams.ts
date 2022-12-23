function handleSearchParams(): void {
  const searchStorageItem = localStorage.getItem('aahh-rs-os-search');
  window.history.replaceState({}, '', searchStorageItem);
  const params = new URLSearchParams(searchStorageItem || '');

  document.querySelectorAll('input').forEach((el) => {
    const { name, type } = el;

    // Set input value to search param under the corresponding name
    if (type === 'text') {
      el.value = params.get(name) || '';
    }

    // Store search string on input
    const onInput = (): void => localStorage.setItem('aahh-rs-os-search', window.location.search);

    el.addEventListener('input', onInput);
  });
}

export default handleSearchParams;
