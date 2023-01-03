// import { Props } from '../../constants';
import { isFormValid } from './form/validate/isFormValid';
import { closePopUp } from './popUpToggle';
import { createSubmitMessage } from './form/init/createSubmitMessage';
import { createForm } from './form/init/createForm';
import { createSubmitButton } from './form/init/createSubmitButton';
import { closeModal } from './closeModal';

function renderCheckout(): void {
  const parentNode = document.querySelector('#root');

  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout__pop-up';

  const checkoutContent = document.createElement('div');
  checkoutContent.className = 'checkout__pop-up_content';

  const submitMessage = createSubmitMessage();
  const checkoutForm = createForm(checkoutContent);
  const submitBtn = createSubmitButton(checkoutForm);

  checkoutNode.append(checkoutContent, submitMessage);

  checkoutNode.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('checkout__pop-up')) {
      closePopUp();
    }
  });

  if (parentNode) {
    parentNode.append(checkoutNode);
  }

  // checkoutForm.addEventListener('change', (e) => {
  //   submitBtn.disabled = !isFormValid();
  // });
  // submitBtn.disabled = !isFormValid();
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
  });
}

export { renderCheckout };
