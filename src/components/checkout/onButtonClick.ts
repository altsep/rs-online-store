import { Props, State } from '../../constants';
import { handleHistory } from '../../utility';
import clearCart from './clearCart';
import { popUpRemove } from './popUpToggle';

export default function onButtonClick(state: State) {

  const checkoutContent = document.querySelector('.checkout__pop-up_content');

  if (checkoutContent) {
    clearCart(state);

    // todo add timer for redirection
    setTimeout(() => {
      popUpRemove();
      handleHistory('/');
    }, 5000);

    alert('close');
  }
}
