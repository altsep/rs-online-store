import { storeSearchString, updateURL } from '../../../../utility';
import getSearchParamValue from '../../../../utility/getSearchParamValue';

let btnValue = getSearchParamValue('display') || 'cards';

export default (isDefault = false): void => {
  const target = document.querySelector<HTMLInputElement>('.display-mode.btn');
  if (target instanceof HTMLInputElement) {
    let query = '';
    const list = document.querySelector<HTMLDivElement>('.products-list');

    if (btnValue === 'cards' && !isDefault) {
      query = 'list';
      list?.classList.add('display-list');
    } else {
      query = '';
      list?.classList.remove('display-list');
    }

    btnValue = query || 'cards';
    target.value = `Display: ${btnValue}`;

    updateURL('display', query);
    storeSearchString();
  }
};
