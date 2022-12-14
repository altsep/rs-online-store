export default function handleHistory(name: string, isDefault?: boolean): void {
  if (isDefault) {
    window.history.replaceState({}, '', name);
  } else {
    window.history.pushState({}, '', name);
  }
}
