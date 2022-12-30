import { Props } from '../../constants';
import isFormValid from './form/validate/isFormValid';
import { popUpActive, popUpRemove } from './popUpToggle';
import createSubmitMessage from './init/createSubmitMessage';
import createForm from './init/createForm';
import createSubmitButton from './init/createSubmitButton';
import closeModal from './closeModal';

function renderCheckout(props: Props): void {
  const parentNode = document.querySelector('#root');

  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout__pop-up active';

  const checkoutContent = document.createElement('div');
  checkoutContent.className = 'checkout__pop-up_content';

  const submitMessage = createSubmitMessage();
  const checkoutForm = createForm(checkoutContent);
  const submitBtn = createSubmitButton(checkoutForm);


  checkoutNode.append(checkoutContent, submitMessage);

  checkoutNode.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('checkout__pop-up')) {
      popUpRemove();
    }
  })

  if (parentNode) {
    parentNode.append(checkoutNode);
  }


  checkoutForm.addEventListener('change', (e) => {
    console.log(e.target);
    console.log(isFormValid());

    submitBtn.disabled = !isFormValid();
  })
  submitBtn.disabled = !isFormValid();
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(props);
  })
}

export default renderCheckout;
