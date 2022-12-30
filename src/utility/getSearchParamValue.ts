export default (name: string): string => {
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get(name) || '';
  return paramValue;
};
