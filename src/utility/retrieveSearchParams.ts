function retrieveSearchParams(name: string): void {
  const { pathname } = window.location;
  const searchStorageItem = localStorage.getItem(`aahh-rs-os-search-${name}`);
  const regexp = new RegExp(`/${name}$`);

  if (regexp.test(pathname)) {
    window.history.replaceState({}, '', searchStorageItem);
  }
}

export { retrieveSearchParams };
