import { Props } from '../../constants';
import initForm from './initForm';
import initSubmitButton from './initSubmitButton';
import isFormValid from './isFormValid';
import onButtonClick from './onButtonClick';

function renderCheckout(props: Props): void {
  const state = props.state;
  const checkoutNode = document.createElement('div');
  checkoutNode.className = 'checkout__pop-up';

  const checkoutContent = document.createElement('div');
  checkoutContent.className = 'checkout__pop-up_content';

  const checkoutForm = initForm('checkout__form');
  const submitBtn = initSubmitButton('checkout__submit_btn');


  checkoutNode.append(checkoutContent);
  checkoutContent.append(checkoutForm, submitBtn);

  const parentNode = document.querySelector('#root');

  if (parentNode) {
    parentNode.append(checkoutNode);
  }

  submitBtn.disabled = !isFormValid();
  submitBtn.addEventListener(('click'), () => {
    onButtonClick(state);
  })
}

export default renderCheckout;
