import type { Product } from '../../../../constants';
import getCheckedValues from '../checkboxes/getCheckedValues';

export default (products: Product[], name: string): Product[] => {
  const fieldset = document.querySelector<HTMLFieldSetElement>(`.filter[name="${name}"]`);

  const checkedValues = getCheckedValues(fieldset);

  if (checkedValues.length) {
    return products.filter((p) =>
      checkedValues.some((v) => p[name as 'category' | 'brand'].toLowerCase() === v.toLowerCase())
    );
  }

  return products;
};
