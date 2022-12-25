const updateURL = (query: string, name: string): void => {
  const { pathname, search } = window.location;
  const searchParams = new URLSearchParams(search);

  if (!query) {
    searchParams.delete(name);
  } else {
    searchParams.set(name, query);
  }

  const appendedSearch = searchParams.toString();
  const url = `${pathname}?${appendedSearch}`;

  window.history.replaceState({}, '', url);
};

export default updateURL;
