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
  createSubmitButton(checkoutForm);

  checkoutNode.append(checkoutContent, submitMessage);

  checkoutNode.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('checkout__pop-up')) {
      closePopUp();
    }
  });

  if (parentNode) {
    parentNode.append(checkoutNode);
  }

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isFormValid()) {
      closeModal();
    }
  });
}

export { renderCheckout };
