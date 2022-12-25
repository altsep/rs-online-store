import { Props } from '../../constants';
import initForm from './initForm';
import initSubmitButton from './initSubmitButton';
import isFormValid from './isFormValid';
import onButtonClick from './onButtonClick';
import { popUpActive, popUpRemove } from './popUpToggle';

function renderCheckout(props: Props): void {
  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout__pop-up';

  const checkoutContent = document.createElement('div');
  checkoutContent.className = 'checkout__pop-up_content';

  const checkoutForm = initForm('checkout__form');
  const submitBtn = initSubmitButton('checkout__submit_btn');


  checkoutNode.append(checkoutContent);
  checkoutContent.append(checkoutForm);
  checkoutForm.append(submitBtn);

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
    onButtonClick(props.state);
  })
}

export default renderCheckout;
