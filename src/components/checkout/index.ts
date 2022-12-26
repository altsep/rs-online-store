import { Props } from '../../constants';
import initForm from './init/initForm';
import initSubmitButton from './init/initSubmitButton';
import isFormValid from './validate/isFormValid';
import onButtonClick from './onButtonClick';
import { popUpActive, popUpRemove } from './popUpToggle';
import timer from './timer';
import createSubmitMessage from './init/createSubmitMessage';

function renderCheckout(props: Props): void {
  const { state } = props;
  
  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout__pop-up';

  const checkoutContent = document.createElement('div');
  checkoutContent.className = 'checkout__pop-up_content';

  const submitMessage = createSubmitMessage();
  const checkoutForm = initForm();
  const submitBtn = initSubmitButton();


  checkoutNode.append(checkoutContent, submitMessage);
  checkoutContent.append(checkoutForm, submitBtn);

  checkoutNode.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('checkout__pop-up')) {
      popUpRemove();
    }
  })

  const parentNode = document.querySelector('#root');
  if (parentNode) {
    parentNode.append(checkoutNode);
  }

  submitBtn.disabled = !isFormValid();
  submitBtn.addEventListener(('click'), () => {
    onButtonClick(state);
  });
}

export default renderCheckout;
