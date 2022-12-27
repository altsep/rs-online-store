import copyUrl from './copyUrl';

function createButtons(): HTMLDivElement {
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';

  const resetBtn = document.createElement('input');
  resetBtn.type = 'reset'; // The event is handled in handleForm
  resetBtn.value = 'Reset';
  resetBtn.className = 'reset btn';

  const copyUrlBtn = document.createElement('input');
  const copyUrlBtnInitialText = 'Copy url';
  copyUrlBtn.type = 'button';
  copyUrlBtn.value = copyUrlBtnInitialText;
  copyUrlBtn.className = 'copy-url btn';
  copyUrlBtn.addEventListener('click', () => copyUrl(copyUrlBtn, copyUrlBtnInitialText));

  btnContainer.append(resetBtn, copyUrlBtn);

  return btnContainer;
}

export default createButtons;
