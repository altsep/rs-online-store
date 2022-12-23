import { Props, State } from '../../constants';
import { handleHistory } from '../../utility';
import clearCart from './clearCart';

export default function onButtonClick(state: State) {

  const checkoutContent = document.querySelector('.checkout__pop-up_content');

  if (checkoutContent) {
    checkoutContent.innerHTML = '';
    checkoutContent.textContent = 'Thank you for order. Redirect to the main page';

    // const
    clearCart(state);
    // todo add timer for redirection
    // const timerId = setTimeout(() => {
    // }, 3000);
    handleHistory('/');
  }
}
