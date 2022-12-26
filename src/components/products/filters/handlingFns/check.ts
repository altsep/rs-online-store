import { Product } from '../../../../constants';
import { updateURL } from '../../../../utility';

export default (products: Product[], name: string): Product[] => {
  const fieldset = document.querySelector<HTMLSelectElement>(`.filter[name="${name}"]`);

  const checkboxes = fieldset?.querySelectorAll('.checkbox');

  const checkedValues: string[] = [];

  if (checkboxes) {
    checkboxes.forEach((checkbox) => {
      if (checkbox instanceof HTMLInputElement) {
        const { checked, value } = checkbox;

        const query = checked ? value : '';

        if (query) {
          checkedValues.push(query);
        }
      }
    });
  }

  const query = checkedValues.join('|');
  updateURL(name, query);

  if (checkedValues.length) {
    return products.filter((p) => checkedValues.some((v) => p[name as keyof Product] === v));
  }

  return products;
};
