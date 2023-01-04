export const storeSearchString = (name: string): void =>
  localStorage.setItem(`aahh-rs-os-search-${name}`, window.location.search);
