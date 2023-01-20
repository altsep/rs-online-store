import { storeSearchString, updateSearchParams, getSearchParamValue } from '../../../../utility';

let btnValue = getSearchParamValue('display') || 'cards';

export const setDisplayMode = (isDefault = false): void => {
  const target = document.querySelector<HTMLInputElement>('.display-mode.btn');
  if (target instanceof HTMLInputElement) {
    let query = '';
    const list = document.querySelector<HTMLDivElement>('.products-list');

    if (btnValue === 'cards' && !isDefault) {
      query = 'list';
      list?.classList.add('display--list');
    } else {
      query = '';
      list?.classList.remove('display--list');
    }

    btnValue = query || 'cards';
    target.value = `Display: ${btnValue}`;

    updateSearchParams('display', query);
    storeSearchString('products');
  }
};
