const updateURL = (query: string, name: string): void | undefined => {
  const { origin, pathname, search } = window.location;
  const searchParams = new URLSearchParams(search);

  if (!query) {
    searchParams.delete(name);
  } else {
    searchParams.set(name, query);
  }

  const appendedSearch = searchParams.toString();
  const url = `${origin}${pathname}?${appendedSearch}`;

  window.history.replaceState({}, '', url);
};

export default updateURL;
