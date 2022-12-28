import type { Product } from '../../../../constants';
import { updateURL } from '../../../../utility';

export default (products: Product[], name: string): Product[] => {
  const fieldset = document.querySelector<HTMLFieldSetElement>(`.filter[name="${name}"]`);

  const checkboxes = fieldset?.querySelectorAll<HTMLInputElement>('.checkbox');

  const checkedValues: string[] = [];

  checkboxes?.forEach((c) => {
    if (c instanceof HTMLInputElement) {
      const { checked, value } = c;

      const query = checked ? value : '';

      if (query) {
        checkedValues.push(query);
      }
    }
  });

  const query = checkedValues.join('|');
  updateURL(name, query);

  if (checkedValues.length) {
    return products.filter((p) =>
      checkedValues.some((v) => p[name as 'category' | 'brand'].toLowerCase() === v.toLowerCase())
    );
  }

  return products;
};
