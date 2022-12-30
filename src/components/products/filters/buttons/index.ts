import getSearchParamValue from '../../../../utility/getSearchParamValue';
import copyUrl from './copyUrl';
import setDisplayMode from './setDisplayMode';

function createButtons(): HTMLDivElement {
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';

  const resetBtn = document.createElement('input');
  resetBtn.type = 'reset'; // The event is handled in handleForm
  resetBtn.value = 'Reset';
  resetBtn.className = 'reset btn';

  const copyUrlBtn = document.createElement('input');
  copyUrlBtn.type = 'button';
  copyUrlBtn.className = 'copy-url btn';
  const copyUrlBtnValue = 'Copy url';
  copyUrlBtn.value = copyUrlBtnValue;

  copyUrlBtn.addEventListener('click', () => copyUrl(copyUrlBtn, copyUrlBtnValue));

  const displayModeBtn = document.createElement('input');
  displayModeBtn.type = 'button';
  displayModeBtn.className = 'display-mode btn';
  const displayModeValue = getSearchParamValue('display') || 'cards';
  displayModeBtn.value = `Display: ${displayModeValue}`;

  displayModeBtn.addEventListener('click', () => setDisplayMode());

  btnContainer.append(resetBtn, copyUrlBtn, displayModeBtn);

  return btnContainer;
}

export default createButtons;
