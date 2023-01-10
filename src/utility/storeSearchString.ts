export const storeSearchString = (name: string): void =>
  localStorage.setItem(`aahh-rs-os-search-${name}`, window.location.search);

export const removeSearchString = (name: string): void => localStorage.removeItem(`aahh-rs-os-search-${name}`);
