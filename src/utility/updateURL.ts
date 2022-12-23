const updateURL = (query: string, name: string): void => {
  const { origin, pathname, search } = window.location;
  const searchParams = new URLSearchParams(search);

  if (!query) {
    searchParams.delete(name);
    return;
  }

  searchParams.set(name, query);
  const appendedSearch = searchParams.toString();
  const url = `${origin}${pathname}?${appendedSearch}`;

  window.history.replaceState({}, '', url);
};

export default updateURL;
