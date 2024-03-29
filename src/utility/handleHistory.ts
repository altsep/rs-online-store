export function handleHistory(url: string, isDefault?: boolean): void {
  if (isDefault) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
  window.dispatchEvent(new Event('popstate'));
}
