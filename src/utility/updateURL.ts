export const updateURL = (name: string, query: string): void => {
  const { pathname, search } = window.location;
  const searchParams = new URLSearchParams(search);

  if (!query) {
    searchParams.delete(name);
  } else {
    searchParams.set(name, query);
  }

  const updatedSearch = searchParams.toString();
  const url = `${pathname}?${updatedSearch}`;

  window.history.replaceState({}, '', url);
};
