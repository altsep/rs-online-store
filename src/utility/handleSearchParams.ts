function handleSearchParams(name: string): void {
  const { pathname } = window.location;
  const searchStorageItem = localStorage.getItem(`aahh-rs-os-search-${name}`);
  const regexp = new RegExp(`/${name}$`);

  // Append the retrieved search query to the current href if the path leads to the page of the same name
  if (regexp.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }
}

export { handleSearchParams };
