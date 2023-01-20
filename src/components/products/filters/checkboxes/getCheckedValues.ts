function getCheckedValues(el: HTMLElement | null): string[] {
  const checkboxes = el?.querySelectorAll<HTMLInputElement>('.checkbox');

  const arr: string[] = [];

  checkboxes?.forEach((c) => {
    if (c instanceof HTMLInputElement) {
      const { checked, value } = c;

      const query = checked ? value : '';

      if (query) {
        arr.push(query);
      }
    }
  });

  return arr;
}

export { getCheckedValues };
